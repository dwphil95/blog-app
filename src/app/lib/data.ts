import { createClient } from "@vercel/postgres";
// import { unstable_noStore as noStore } from "next/cache";
import { sql } from "@vercel/postgres";

export async function connectToDB() {
    const client = createClient();
    await client.connect();

    try {
        if (client) {
            console.log("Connected to database");
            return client;
        }
    } catch (error) {
        console.log("Error connecting to database", error);
    }
}

export async function getPosts() {
    try {
        // noStore(); // no longer needed as Next.js version 15 now defaults to no caching behvaior
        const data = await sql`SELECT * FROM posts`;
        return data.rows;
    } catch (error) {
        console.log("Error getting posts", error);
    }
}

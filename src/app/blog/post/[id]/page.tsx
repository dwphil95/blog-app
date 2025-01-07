// import { posts } from "@/app/lib/placeholder-data";
import { getPosts } from "@/app/lib/data";
import Post from "@/app/ui/components/posts/Post";
import { notFound } from "next/navigation";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const posts = await getPosts();
    const post = posts?.find((post) => post.id === id);

    if (!post) notFound();
    return (
        <>
            <h1>Post</h1>
            <Post {...post} />
        </>
    );
}

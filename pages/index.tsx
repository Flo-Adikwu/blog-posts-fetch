import { getAllPosts, Post } from "@/lib/api";
import React from "react";

type Props = {
  posts: Post[];
};

export default function Posts({ posts }: Props) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">POSTS</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="border p-4 rounded hover:shadow bg-sky-500/50"
          >
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
//prerender all posts at build time
export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

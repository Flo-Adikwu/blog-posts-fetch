import { getAllPosts, Post } from "@/lib/api";
import { useLoadingStore } from "@/store/useLoadingStore";
import React, { useEffect, useState } from "react";

type Props = {
  posts: Post[];
};

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const setLoading = useLoadingStore((s) => s.setLoading);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);

      try {
        const data = await getAllPosts();
        setPosts(data.slice(0, 20)); //Limit of 20
      } catch (error) {
        console.log("failed to fetch posts", error);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">POSTS</h1>
      <div>
        {" "}
        <ul className="space-y-4">
          {posts.map((post) => (
            <li
              key={post.id}
              className="border p-4 rounded hover:shadow bg-sky-500/50"
            >
              <h5 className="font-bold">{post.title}</h5>
              <p>{post.body}</p>
              {post.tags.map((tag) => (
                <small className="font-bold mr-3 text-red-500">{tag}</small>
              ))}
              <div className="flex font-bold">
                <span className="inline-flex items-center rounded-md mr-3 bg-gray-50 px-2 py-1 text-xs ">
                  {`👀: ${post.views}`}
                </span>
                <span className="inline-flex items-center mr-3 rounded-md bg-green-200 px-2 py-1 text-xs ">
                  {`👍🏼: ${post.reactions.likes}`}
                </span>
                <span className="inline-flex items-center mr-3 rounded-md bg-red-200 px-2 py-1 text-xs ">
                  {`👎🏼: ${post.reactions.dislikes}`}
                </span>
              </div>
            </li>
          ))}
          {}
        </ul>
      </div>
      {/* <h4>Comments</h4> */}
    </div>
  );
}

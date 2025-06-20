// import axios from "axios";
import axios from "axios";

export type Post = {
  id: number;
  title: string;
  body: string;
  tags: [];
  views: number;
  reactions: {
    likes: number;
    dislikes: number;
  };
};

export type Comment = {
  id?: number;
  body: string;
  user:{
    fullName: string;
  }
};

//Base URL
const BASE_URL = "https://dummyjson.com";

//fetch all posts
export async function getAllPosts(): Promise<Post[]> {
  const { data } = await axios.get(`${BASE_URL}/posts`);
  return data.posts;
}

//fetch comments and comment count
export async function getCommentsCount(postId: number): Promise<{comments:Comment[], total:number}> {
  const { data } = await axios.get(`${BASE_URL}/comments/post/${postId}`);
  return {
    comments: data.comments,
    total: data.total
}
}
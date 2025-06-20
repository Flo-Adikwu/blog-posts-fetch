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
};

//Base URL
const BASE_URL = "https://dummyjson.com";

//fetch all posts
export async function getAllPosts(): Promise<Post[]> {
  const { data } = await axios.get(`${BASE_URL}/posts`);
  return data.posts;
}

export async function getCommentsCount(postId: number): Promise<{comments:Comment[], total:number}> {
  const { data } = await axios.get(`${BASE_URL}/comments/post/${postId}`);
  return {
    comments: data.comments,
    total: data.total
}
}

// Basics
// Use the endpoints in https://dummyjson.com/docs/posts and/or https://dummyjson.com/docs/comments for your API requests.
// Display a list of 20 posts from the provided API
// Each item should present: title, body, the list of tags, reactions (like, dislike), views count and comments count

// Comments Basics
// Fetch and display the comments count for each post

// Global Loading Indicator
// Implement a loading indicator that is display while any data is being fetched
// The loading indicator should remain visible until all posts and all comments have been fully loaded.
// Ensure that the posts and comments are not displayed or in their loading state until the loading process is complete
// ---
// Styling
// Apply styling to the work done so far: you can use any framework of your choice (Tailwind, Bootstrap, or simply CSS or SCSS)
// Make the application visually appealing, with attention to layout, typography and spacing

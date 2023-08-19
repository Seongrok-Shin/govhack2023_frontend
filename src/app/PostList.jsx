import React, { useEffect, useState } from 'react'
import Post from "./Post";
import { getAllPosts } from './api/postsApi';

export default function PostList() {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fn = async() => {
      const posts = await getAllPosts();
      setUserPosts(posts);
    };
    fn();
  }, []);

  return (
    <div>
      {userPosts &&
        userPosts.map((post) => {
          return <Post post={post} />;
        })}
    </div>
  );
};
import React, { useEffect, useState } from 'react'
import Post from "./Post";
import { getAllPosts } from './api/postsApi';


export default function PostList() {
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    if(userPosts.length === 0){
    const fn = async() => {
      const posts = await getAllPosts();
      setUserPosts(posts);
    };
    fn();
  }
  }, [userPosts]);

  return (
    <div>
      {userPosts &&
        userPosts.map((post) => {
          return <Post post={post} />;
        })}
    </div>
  );
};
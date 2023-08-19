'use client';
import Post from "../Post";
import { api } from "../api/api";
import React from 'react'

export default function PostList({ posts }) {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    // (async () => {
    //   const posts = await api.getAllPosts();
    //   setUserPosts(posts);
    // })();
  }, []);

  return (
    <div>
      {/* {userPosts &&
        userPosts.map((post) => {
          return <Post post={post} />;
        })} */}
    </div>
  );
};

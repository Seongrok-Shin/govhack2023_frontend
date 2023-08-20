import React, { useEffect, useState } from 'react';
import Post from './Post';
import { getAllPosts } from './api/postsApi';

export default function PostList() {
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    if (userPosts.length === 0) {
      const fn = async () => {
        const posts = await getAllPosts();
        setUserPosts(posts);
        console.log(userPosts);
      };
      fn();
    }
  }, [userPosts]);

  return (
    <div>
      {userPosts.length > 0 ? (
        userPosts.map((post) => {
          return <Post post={post} />;
        })
      ) : (
        <div>
          <div style={{ height: '844px' }}></div>
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 76fc655480ce686bc4a2f0401b71120c4de861ac

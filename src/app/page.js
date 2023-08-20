'use client';
import React, { useEffect, useState } from 'react';
import CreatePost from './CreatePost';
import styles from './page.module.css';
import './font-config.css';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import Link from 'next/link';
import PostList from './PostList';
import Nav from './Nav';
export default function Home() {
  const logout = async () => {
    console.log('Logging out...');
    await signOut(auth);
    console.log('Redirecting to login page...');
    router.push('/login');
  };

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedin = auth.currentUser != null;
    if (!isLoggedin) {
      router.push('/login');
    } else {
      setIsUserLoggedIn(true);
    }
  }, []);

  console.log('User is logged in? ' + isUserLoggedIn);

  const router = useRouter();
  if (!isUserLoggedIn) {
    return;
  } else {
    return (
      <div className={styles.container}>
        <div className={`${styles.top_menu_bar} px-2 py-3`}>
          <h1 className="d-inline-block bold">Green Kiwi</h1>
        </div>
        <CreatePost />
        <PostList />
        <Nav />
      </div>
    );
  }
}

'use client';
import React, { useEffect, useState } from 'react';
import CreatePost from './CreatePost';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import Link from 'next/link';
import PostList from './PostList';

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
    return <span>hi</span>;
  } else {
    return (
      <div className={styles.body}>
        <i class="bi bi-list"></i>
        <h1 className="{}">Green Kiwi</h1>
        <button type="button" onClick={logout}>
          sign out
        </button>
        <CreatePost />
        <PostList />
        <PostList />
        <nav className={styles.navigation}>
          <ul>
            <li>
              <div className={styles.logo}>
                <img
                  src="/eco-house.png"
                  alt="eco house logo"
                  style={{ width: '30px', height: '30', marginLeft: 4 }}
                />
              </div>
              <Link href="/">Home</Link>
            </li>
            <li>
              <div className={styles.logo}>
                <img
                  src="layout.png"
                  alt="layout logo"
                  style={{ width: '30px', height: '30', marginLeft: 15 }}
                />
              </div>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <div className={styles.logo}>
                <img
                  src="/present.png"
                  alt="present logo"
                  style={{ width: '30px', height: '30', marginLeft: 7 }}
                />
              </div>
              <Link href="/freebies">Freebies</Link>
            </li>
            <li>
              <div className={styles.logo}>
                <img
                  src="/learning.png"
                  alt="learning logo"
                  style={{ width: '30px', height: '30', marginLeft: 8 }}
                />
              </div>
              <Link href="/learning">Learning</Link>
            </li>
            <li>
              <div className={styles.logo}>
                <img
                  src="/user.png"
                  alt="user logo"
                  style={{ width: '30px', height: '30', marginLeft: 3 }}
                />
              </div>
              <Link href="/reward">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

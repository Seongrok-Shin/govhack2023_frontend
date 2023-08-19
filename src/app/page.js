"use client";
import React from 'react';
import Post from './Post';
import CreatePost from './CreatePost';
import styles from './page.module.css'
import { useRouter } from "next/navigation"
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig'
import Link from 'next/link';
export default function Home() {
  const logout = async () => {
    await signOut(auth);
  };

  const isLoggedin = auth.currentUser != null;

  const router = useRouter()
  if (!isLoggedin) {
    router.push("/login");
  } else {
    return (
      <div className={styles.container}>
        <h1>Green Kiwi</h1>
        <button type="button" onClick={logout}><Link href="/login">sign out</Link></button>
        <CreatePost />
        <Post />
        <Post />

        <Post />
        <Post />

        <nav className={styles.navigation}>
          <ul>
            <li>
              <div className={styles.logo}>
                <img src="/eco-house.png" alt="eco house logo" style={{ width: '30px', height: '30', marginLeft: 4 }} />
              </div>
              <Link href="/">Home</Link>
            </li>
            <li>
              <div className={styles.logo}>
                <img src="/user.png" alt="user logo" style={{ width: '30px', height: '30', marginLeft: 15 }} />
              </div>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <div className={styles.logo}>
                <img src="/layout.png" alt="layout logo" style={{ width: '30px', height: '30', marginLeft: 7 }} />
              </div>
              <Link href="/freebies">Freebies</Link>
            </li>
            <li>
              <div className={styles.logo}>
                <img src="/learning.png" alt="learning logo" style={{ width: '30px', height: '30', marginLeft: 8 }} />
              </div>
              <Link href="/learning">Learning</Link>
            </li>
            <li>
              <div className={styles.logo}>
                <img src="/present.png" alt="present logo" style={{ width: '30px', height: '30', marginLeft: 3 }} />
              </div>
              <Link href="/reward">Reward</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

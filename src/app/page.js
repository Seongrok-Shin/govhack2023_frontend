"use client";

import styles from './page.module.css'
import { useRouter } from "next/navigation"
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig'
import Link from 'next/link';
export default function Home() {
  const logout = async () => {
    await signOut(auth);
  };
  
  const isLoggedin = false;

  const router = useRouter()
  if (isLoggedin) {
    router.push("/login");
  } else {
    return (
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Hello World</h1>
          <button type="button" onClick={logout}><Link href="/login">sign out</Link></button>
        </div>
      </main>
    )
  }
}

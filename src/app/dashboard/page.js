'use client'
import React from 'react';
import Link from 'next/link';
import styles from '../page.module.css';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1> Dashboard page</h1>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <div className={styles.logo}>
              <img src="/eco-house.png" alt="eco house logo" style={{ width: '30px', height: '30', marginLeft: 4}} />
            </div>
            <Link href="/">Home</Link>
          </li>
          <li>
            <div className={styles.logo}>
              <img src="/user.png" alt="user logo" style={{ width: '30px', height: '30', marginLeft: 15}} />
            </div>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <div className={styles.logo}>
              <img src="/layout.png" alt="layout logo" style={{ width: '30px', height: '30', marginLeft: 7}} />
            </div>
            <Link href="/freebies">Freebies</Link>
          </li>
          <li>
            <div className={styles.logo}>
              <img src="/learning.png" alt="learning logo" style={{ width: '30px', height: '30', marginLeft: 8}} />
            </div>
            <Link href="/learning">Learning</Link>
          </li>
          <li>
            <div className={styles.logo}>
              <img src="/present.png" alt="present logo" style={{ width: '30px', height: '30', marginLeft: 3}} />
            </div>
            <Link href="/reward">Reward</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Dashboard;



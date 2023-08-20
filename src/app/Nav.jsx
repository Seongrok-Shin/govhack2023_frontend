'use client';
import React from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

export default function Nav() {

  const router = useRouter();
  const HomePage = () => {
    router.push("/")
  }
  const DashBoardPage = () => {
    router.push("/dashboard")
  }
  const FreebiesPage = () => {
    router.push("/freebies")
  }
  const LearningPage = () => {
    router.push("/learning")
  }
  const ProfilePage = () => {
    router.push("/reward")
  }
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <div className={styles.logo}
            onClick={HomePage}>
            <img
              src="/eco-house.png"
              alt="eco house logo"
              style={{ width: '30px', height: '30', marginLeft: 4 }}
            />
            <p>Home</p>
          </div>
        </li>
        <li>
          <div className={styles.logo}
            onClick={DashBoardPage}>
            <img
              src="layout.png"
              alt="layout logo"
              style={{ width: '30px', height: '30', marginLeft: 15 }}
            />
            <p>Dashboard</p>
          </div>
        </li>
        <li>
          <div className={styles.logo}
            onClick={FreebiesPage}>
            <img
              src="/present.png"
              alt="present logo"
              style={{ width: '30px', height: '30', marginLeft: 7 }}
            />
            <p>Freebies</p>
          </div>
        </li>
        <li>
          <div className={styles.logo}
            onClick={LearningPage}>
            <img
              src="/learning.png"
              alt="learning logo"
              style={{ width: '30px', height: '30', marginLeft: 8 }}
            />
            <p>Learning</p>
          </div>
        </li>
        <li>
          <div className={styles.logo}
            onClick={ProfilePage}>
            <img
              src="/user.png"
              alt="user logo"
              style={{ width: '30px', height: '30', marginLeft: 3 }}
            />
            <p>Profile</p>
          </div>
        </li>
      </ul>
    </nav>
  );
};

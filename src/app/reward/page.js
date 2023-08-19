'use client'
import React from 'react';
import Link from 'next/link';
import styles from '../page.module.css';
import Image from 'next/image';
const Dashboard = () => {
  const user = {
    Firstname: 'Harold',
    Lastname: 'Min',
    ID: 'abcdef1234',
    Title: 'Super C02 Saver',
    Image: 'https://randomuser.me/api/portraits/men/1.jpg'
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileCard}>
        <div className={styles.profileImageContainer}>
          <img src={user.Image} alt={`${user.Firstname}'s profile`} className={styles.profileImage} />
        </div>
        <div className={styles.profileInfo}>
          <h2 className={styles.profileName}>{`${user.Firstname} ${user.Lastname}`}</h2>
          <p className={styles.profileTitle}>{user.Title}</p>
          <p className={styles.profileID}>ID: {user.ID}</p>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.stylishButton1}>Challenge</button>
          <button className={styles.stylishButton2}>Badges</button>
        </div>

        <p className={styles.profileTitle}>Refer A Friend</p>
        <div className={styles.badgeCard}>
          <div>
            <img src="/1.png" alt="eco house logo" className={styles.badgeImage} />
            <img src="/2.png" alt="eco house logo" className={styles.badgeImage} />
            <img src="/3.png" alt="eco house logo" className={styles.badgeImage} />
          </div>
        </div>

        <p className={styles.profileTitle}>Ride Bike</p>
        <div className={styles.badgeCard}>
          <div>
            <img src="/4.png" alt="eco house logo" className={styles.badgeImage} />
            <img src="/5.png" alt="eco house logo" className={styles.badgeImage} />
            <img src="/6.png" alt="eco house logo" className={styles.badgeImage} />
          </div>
        </div>

          <p className={styles.profileTitle}>Use Public Transport</p>
          <div className={styles.badgeCard}>
          <div>
            <img src="/12.png" alt="eco house logo" className={styles.badgeImage} />
            <img src="/13.png" alt="eco house logo" className={styles.badgeImage} />
            <img src="/14.png" alt="eco house logo" className={styles.badgeImage} />
          </div>
        </div>
      </div>

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
              <img src="layout.png" alt="layout logo" style={{ width: '30px', height: '30', marginLeft: 15 }} />
            </div>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <div className={styles.logo}>
              <img src="/present.png" alt="present logo" style={{ width: '30px', height: '30', marginLeft: 7 }} />
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
              <img src="/user.png" alt="user logo" style={{ width: '30px', height: '30', marginLeft: 3 }} />
            </div>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Dashboard;



'use client'
import React, { useState } from 'react';
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

  const [showBadges, setShowBadges] = useState(false);
  const [showChallenges, setShowChallenges] = useState(false);

  const toggleBadges = () => {
    setShowBadges(!showBadges);
    setShowChallenges(false);
  };

  const toggleChallenges = () => {
    setShowChallenges(!showChallenges);
    setShowBadges(false); 
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
          <button className={styles.stylishButton1} onClick={toggleChallenges}>Challenge</button>
          <button className={styles.stylishButton2} onClick={toggleBadges}>Badges</button>
        </div>

        {showBadges && (
          <>
            <p className={styles.profileTitle}>Refer A Friend</p>
            <div className={styles.badgeCard}>
              <div className={styles.badgeContainer}>
                <div>
                  <Image src="/1.png" alt="badge 1" width={40} height={40} />
                  <Image src="/2.png" alt="badge 2" width={40} height={40} />
                  <Image src="/3.png" alt="badge 3" width={40} height={40} />
                </div>
              </div>
            </div>

            <p className={styles.profileTitle}>Ride Bike</p>
            <div className={styles.badgeCard}>
              <div className={styles.badgeContainer}></div>
              <div>
                <Image src="/4.png" alt="badge 4" width={40} height={40} />
                <Image src="/5.png" alt="badge 5" width={40} height={40} />
                <Image src="/6.png" alt="badge 6" width={40} height={40} />
              </div>
            </div>

            <p className={styles.profileTitle}>Use Public Transport</p>
            <div className={styles.badgeCard}>
              <div className={styles.badgeContainer}>
                <div>
                  <Image src="/12.png" alt="badge 12" width={40} height={40} />
                  <Image src="/13.png" alt="badge 13" width={40} height={40} />
                  <Image src="/14.png" alt="badge 14" width={40} height={40} />
                </div>
              </div>
            </div>
          </>
        )}

        {showChallenges && (
          <>
            <p className={styles.profileTitle}>What is Refer A Friend?</p>
            <p>* You can accomplish this by sharing your status with your friends!</p>

            <p className={styles.profileTitle}>What is Ride Bike?</p>
            <p>* You can attain this by recording your bike rides!</p>

            <p className={styles.profileTitle}>What is Use Public Transport?</p>
            <p>* You can reach this goal by using public transportation!</p>
          </>
        )}
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
            <Link href="/reward">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;



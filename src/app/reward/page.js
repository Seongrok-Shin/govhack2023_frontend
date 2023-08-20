"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import Image from "next/image";
import Nav from "../Nav"
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import '../font-config.css';
import { useRouter } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.css';

export default function Profile() {
  const router = useRouter();
  const logout = async () => {
    console.log('Logging out...');
    await signOut(auth);
    console.log('Redirecting to login page...');
    router.push('/login');
  };

  const INITIAL_TOGGLE_STATES = {
    BADGES: true,
    CHALLENGES: false
  };
  const user = {
    Firstname: "Harold",
    Lastname: "Min",
    Email: "default@gmail.com",
    Title: "Super C02 Saver",
    Image: "https://randomuser.me/api/portraits/men/1.jpg",
  };

  const [showBadges, setShowBadges] = useState(INITIAL_TOGGLE_STATES.BADGES);
  const [showChallenges, setShowChallenges] = useState(INITIAL_TOGGLE_STATES.CHALLENGES);

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
      <div className={`${styles.top_menu_bar} px-2 py-3 row justify-content-between`}>
        <h1 className="d-inline-block bold col-4">Profile</h1>
        <div className="col-4 text-end" onClick={logout}>Sign Out</div>
      </div>
      <div className={styles.profileCard}>
        <div className={styles.profileImageContainer}>
          <img
            src={user.Image}
            alt={`${user.Firstname}'s profile`}
            className={styles.profileImage}
          />
        </div>
        <div className={styles.profileInfo}>
          <h2
            className={styles.profileName}
          >{`${user.Firstname} ${user.Lastname}`}</h2>
          <p className={styles.profileTitle}>{user.Title}</p>
          <p className={styles.profileID}>ID: {user.Email}</p>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.stylishButton1} onClick={toggleChallenges}>
            Challenge
          </button>
          <button className={styles.stylishButton2} onClick={toggleBadges}>
            Badges
          </button>
        </div>
      </div>

      <div>
        {showBadges && (
          <div className={styles.badgeSection}>
            <p className={styles.profileTitle}>Refer A Friend</p>
            <div className={styles.badgeCard}>
              <div className={styles.badgeContainer}>
                <div>
                  <Image src="/1.png" alt="badge 1" width={40} height={40} />
                  <Image src="/2.png" alt="badge 2" width={40} height={40} className={styles.grayscale} />
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
                <Image src="/6.png" alt="badge 6" width={40} height={40} className={styles.grayscale} />
              </div>
            </div>

            <p className={styles.profileTitle}>Use Public Transport</p>
            <div className={styles.badgeCard}>
              <div className={styles.badgeContainer}>
                <div>
                  <Image src="/12.png" alt="badge 12" width={40} height={40} className={styles.grayscale} />
                  <Image src="/13.png" alt="badge 13" width={40} height={40} />
                  <Image src="/14.png" alt="badge 14" width={40} height={40} />
                </div>
              </div>
            </div>
          </div>
        )}

        {showChallenges && (
          <div className="py-3">
            <p className="badge bg-success"> Car-Free Commute: Use public transport, bike, walk, or carpool.</p>
            <p className="badge bg-success"> Meatless Mondays: Go vegetarian once a week.</p>
            <p className="badge bg-success"> Energy-Smart Home: Use LEDs, seal drafts, and adjust thermostats.</p>
            <p className="badge bg-success"> Reduce, Reuse, Recycle: Minimize waste, recycle, and use reusables.</p>
            <p className="badge bg-success"> Unplug and Power Down: Turn off devices and lights when not in use.</p>
            <p className="badge bg-success"> Minimalist Consumption: Buy fewer, quality items with less packaging.</p>
            <p className="badge bg-success"> Local, Seasonal Eating: Choose locally grown and in-season foods.</p>
            <p className="badge bg-success"> Eco-Friendly Shopping: Opt for sustainable, ethical products..</p>
            <p className="badge bg-success"> Energy-Saving Tech: Use energy-efficient appliances and sources.</p>
            <p className="badge bg-success"> Plant a Tree: Contribute to tree planting initiatives.</p>
          </div>
        )}
      </div>
      <Nav />
    </div>
  );
};
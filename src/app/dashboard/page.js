'use client';
import React from 'react';
import Nav from '../Nav';
import styles from '../page.module.css';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1> Dashboard page</h1>
      <Nav />
    </div>
  );
};

export default Dashboard;

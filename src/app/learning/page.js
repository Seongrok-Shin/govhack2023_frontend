'use client';
import React from 'react';
import styles from '../page.module.css';
import Nav from '../Nav';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1>Learning page</h1>
      <Nav />
    </div>
  );
};

export default Dashboard;

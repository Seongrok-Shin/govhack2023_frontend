'use client';
import styles from '../page.module.css';
import Footer from '../_components/footer';
import { BarChart } from '@mui/x-charts/BarChart';

import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1> Freebie page</h1>
      <Nav />
    </div>
  );
};

export default Dashboard;

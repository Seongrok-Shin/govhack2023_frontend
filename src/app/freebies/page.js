'use client';
import React from 'react';
import styles from '../page.module.css';
import Nav from '../Nav';
import Image from 'next/image';

import BackgroundIMG from '../../../public/marketPlace.png';
export default function Freebies() {
  return (
    <div className={styles.container}>
      <Image src={BackgroundIMG} width={390} height={844} />
      <Nav />
    </div>
  );
}

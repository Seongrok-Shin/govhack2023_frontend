'use client';
import Nav from '../Nav';
import Image from 'next/image';
import BackgroundIMG from '../../../public/dashboard.png';
const Dashboard = () => {
  return (
    <div className="imgbackground">
      <Image src={BackgroundIMG} width={390} height={759.6} />
      <Nav />
    </div>
  );
};

export default Dashboard;

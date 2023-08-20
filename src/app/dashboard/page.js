'use client';
import Nav from '../Nav';
import Image from 'next/image';
import BackgroundIMG from '../../../public/dashboard.png';
export default function Dashboard() {
  return (
    <div className="imgbackground">
      <Image src={BackgroundIMG} width={390} height={759.6} />
      <Nav />
    </div>
  );
}

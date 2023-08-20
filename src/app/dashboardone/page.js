'use client';
import Nav from '../Nav';
import Image from 'next/image';
import BackgroundIMG from '../../../public/dashboardone.png';
import { useRouter } from 'next/navigation';
export default function DashboardOne() {
  const router = useRouter();
  const compare = () => {
    router.push('/dashboard');
  };
  return (
    <div className="imgbackground">
      <Image src={BackgroundIMG} width={390} height={759.6} onClick={compare} />
      <Nav />
    </div>
  );
}

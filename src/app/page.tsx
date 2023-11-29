import Image from 'next/image'
import NavBar from '../components/organisms/navigation/NavBar'
import HeroWithForm from '@/components/organisms/Hero/HeroWithForm'
import Footer from '@/components/organisms/footer/Footer';
import Temoignage from '@/components/organisms/commentary/Temoignage';

export default function Home() {
    const darkComponent = false;
    
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between px-24 min-w-[100vw]">
        <HeroWithForm darkComponent={false} />
        <Temoignage darkComponent={true} />
      </main>
      <Footer />
    </>
  )
} 

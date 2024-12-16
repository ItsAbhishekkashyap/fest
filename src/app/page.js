
import HeroSection from "@/components/HeroSection";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

import Image from "next/image";


export default function Home() {
  return (

    <main className="relative min-h-screen antialiased">
      {/* Background Image */}
      
      {/* <BackgroundBeamsWithCollision > */}
      
        <div className="absolute inset-0 w-100vw   h-100vw sm:bg-[url('/home2.png')] bg-[url('/encoresm.png')] bg-cover opacity-100  phone:bg-center sm:bg-center  z-0"></div>

        {/* landing page */}
      
        <HeroSection />
        <div className="section1">
        
        </div>
        
      {/* </BackgroundBeamsWithCollision> */}
      
      
      
    </main>

  );
}

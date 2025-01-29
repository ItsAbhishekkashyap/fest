import React from "react";
import Image from "next/image";
// import Slider from 'react-slick';

const HeroSection = () => {
  return (
    <main className="relative w-screen min-h-screen">
    <div className="  flex md:pt-36 lg:pt-32 justify-center w-screen min-h-screen text-white text-center">
      <div className="p-5 sm:p-8 md:p-10 ">
        <Image
          src="/encoretext.png"
          alt="Example Image"
          width={600}
          height={10}
          className="justify-center align-center animate-fall"
        />



        <p className="-mt-32 phone:pt-10 text-base sm:text-lg animate-fall">
          THE CULTURAL FEST OF IET LUCKNOW
        </p>

       
      </div>
    </div>
   
    </main>
  );
};

export default HeroSection;
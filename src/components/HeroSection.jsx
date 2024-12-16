import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";

const HeroSection = () => {
  return (
    <div className="relative top-28 flex items-center  justify-center w-screen min-h-screen text-white text-center">
      <div className="p-5 sm:p-8 md:p-10">
        <Spotlight
          className="-top-40 left-40 phone:left-20 phone:top-0 "
          fill="white"
        />
        {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-fall">
            ENCORE
          </h1> */}
        <div className="flex flex-col items-center">
          <Image
            src="/encoretext.png"
            alt="Example Image"
            width={640}
            height={10}
            className=" justify-center align-center animate-fall"
          />

          <p className="-mt-20 phone:pt-1 text-base sm:text-lg animate-fall">
            THE CULTURAL FEST OF
          </p>
        </div>
        <Image
          src="/imambada.png"
          alt="imambada image"
          height={100}
          width={900}
          className="mx-auto position-relative   "
          draggable={false}
        />
      </div>
    </div>
  );
};

export default HeroSection;

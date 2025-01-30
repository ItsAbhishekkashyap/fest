"use client"
import React, { useEffect } from "react";

// import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";

import Footer from "@/components/Footer";
import Link from 'next/link';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/statsSection";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import FilmFestival from "@/components/NawabiNocturne";
import { Menu } from "lucide-react"
import { useState } from "react"

import { AnimatedTestimonialsDemo2 } from "@/components/Animated2";





export default function Home() {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    "/i1.jpg",
    "/i2.jpg",

    "/i3.jpg",
    "/i4.jpg",

  ]


  return (
    <main className="main">
      {/* Background Image */}
      {/* <div className="relative inset-0 w-screen bg-[url('/landingPage.webp')] bg-cover  h-screen opacity-400 z-0"> */}
      {/* <Image
          src="/en.png"
           width={345} height={200} alt="Example Image"
          layout="fill"
          objectFit="cover"
          quality={400}
        /> */}
      {/* <HeroSection /> */}
      {/* </div> */}


      <div className="min-h-screen bg-black relative">
        {/* Background Image Grid */}
        <div className="absolute z-10 top-0 left-0 w-full h-full">
          <div className="  inset-0 grid grid-cols-4 w-full h-full">
            {images.map((src, i) => (
              <div
                key={i}
                className="relative w-full h-full overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Background ${i + 1}`}
                  fill
                  className={`object-cover transition-opacity duration-500 ease-in-out ${hoveredIndex === i ? "opacity-100" : "opacity-30"
                    }`}
                />
              </div>
            ))}
          </div>
        </div>



        {/* Main Content */}
        <main className="relative  flex flex-col items-center justify-center min-h-[100vh] text-white">
          {/* <div className="text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="text-[#FFA500]">ENCORE</span> 2025
          </h1>
          <h2 className="text-3xl md:text-4xl">THE CULTURAL FEST OF IET LUCKNOW</h2>
          <p className="text-xl">MAR 9TH-11TH</p>
        </div> */}




          {/* <Image
            src="/Legcy.png"
            alt="Example Image"
            
            width={400}
            height={400}
            className="  z-10 "
          /> */}


          <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden">
            {/* Background Image (Optional) */}
            {/* <div className="absolute inset-0 w-full h-full z-0">
              <Image
                src="/logo1.png" // Replace with your image path
                width={400}
                height={400}
                alt="Background"
                className="w-full h-full object-cover opacity-50"
              />
            </div> */}

            {/* From here the text design starts */}


            <div className="relative z-10 text-center flex flex-col">
              {/* Main Heading */}
              <div className="flex items-baseline relative  gap-2 justify-center">
                {/* "JOIN THE" Section */}
                <div className="flex flex-col absolute bottom-[36px] left-[15.5%]  items-end leading-none">
                  <h1 className="lg:text-[40px] md:text-[180px] font-bold uppercase tracking-widest">
                    JOIN
                  </h1>

                  <h1 className="lg:text-[20px] md:text-[120px] font-bold uppercase tracking-widest">
                    THE
                  </h1>
                </div>

                {/* "ENCORE 2025" Section */}
                <div className="flex flex-row items-end   gap-4">
                  <h1 className="lg:text-[90px] md:text-[40px] font-bold uppercase tracking-widest text-[#FFA500]">
                    ENCORE
                  </h1>
                  <h1 className="lg:text-[60px] lg:pb-3 md:text-[10px] font-bold uppercase tracking-widest text-[#FFA500]">
                    2025
                  </h1>
                </div>
              </div>

              {/* "LEGACY" & "MAR 9TH-11TH + BUTTON" Section */}
              <div className="flex items-start lg:mr-60">
                <Image
                  src="/logo1.png"
                  width={400}
                  height={400}
                  alt="Background"
                  className="w-[200px] h-[200px] rotate-[90-deg]"
                />
                <h1 className="lg:text-[90px] md:text-[150px]  font-bold uppercase tracking-widest">
                  LEGACY
                </h1>
                <div className="flex flex-col items-start">
                  <h1 className="lg:text-4xl md:text-6xl font-bold">MAR 9TH-11TH</h1>
                  {/* Call-to-Action Button */}
                  <Link
                    href="/register" // Replace with your registration link
                    className="inline-block bg-[#FFA500] text-black font-bold text-2xl md:text-3xl px-10 py-5 rounded-xl hover:bg-[#FF8C00] transition-colors"
                  >
                    JOIN THE EVENT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>











      <FilmFestival />
      <StatsSection />









      <div className="relative flex flex-col gap-8 items-center justify-center w-screen min-h-[70vh] px-8 py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/A.png"
            alt="Background Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col gap-8 items-center justify-center text-center">
          <h2 className="text-5xl text-[#FFA500] font-extrabold  drop-shadow-md">
            About Encore 25
          </h2>
          <div className="bg-black/60  rounded-xl p-6 max-w-4xl">
            <p className=" text-white text-xl leading-relaxed">
              Embark on a legacy as the Institute of Engineering and Technology, Lucknow, proudly unfolds the annual saga of Encore. With a storied history spanning many years, this iconic event has evolved into a beacon of excellence and innovation.
              <br />
              Encore has had the honor of hosting renowned personalities, including the melodious Jubin Nautiyal and the vivacious Neha Kakkar, whose captivating performances added an unforgettable dimension to the narrative.
              <br /><br />
              Join us for a time-honored celebration where tradition gracefully intertwines with modernity, and where the echoes of the past resonate with the promise of an even grander future. Beyond a mere gathering, Encore is a testament to the enduring spirit of creativity, talent, and camaraderie that has defined our institution over the years.
              <br /><br />
              Don’t miss your chance to be part of this historic event that continues to attract and inspire with each passing year. Immerse yourself in the symphony of brilliance and witness the convergence of legendary legacies at Encore!
            </p>
          </div>
        </div>
      </div>





      <div className=" bg-[url('/bg3.jpg')] w-screen bg-cover min-h-[50vh] bg-no-repeat bg-fixed" id="events">
        <h2 className="text-center pt-28 text-8xl">Events</h2>

        <section className="home" id="home">

          <div className=" p-32">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={30}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              loop={true} // Optional for continuous looping
              autoplay={{ delay: 3000, disableOnInteraction: false }} // Optional for auto-sliding
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              {[
                '/event/1.jpg',
                '/event/2.jpg',
                '/event/3.jpg',
                '/event/4.jpg',
                '/event/5.jpg',
                '/event/6.jpg',
                '/event/7.jpg',
                '/event/8.jpg',
                '/event/9.jpg',
                '/event/10.jpg',
                '/event/11.jpg',
                '/event/12.jpg',
                '/event/13.jpg',
                '/event/14.jpg',
                '/event/15.jpg',
                '/event/16.jpg',
                '/event/17.jpg',
                '/event/18.jpg',
                '/event/19.jpg',
                '/event/20.jpg',
                '/event/21.jpg',
                '/event/22.jpg',
                '/event/23.jpg',
                '/event/24.jpg',
                '/event/25.jpg',
                '/event/26.jpg',
                '/event/27.jpg',
                '/event/28.jpg',
              ].map((src, index) => (
                <SwiperSlide key={index}>
                  <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[23rem] sm:w-[30rem]  rounded-xl p-6 border w-[40vw] h-[90vh]  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 text-center dark:text-white"
                      >
                        Our Events
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-center text-sm max-w-sm mt-2 dark:text-neutral-300"
                      >
                        Unleash the power of the event and enjoy every moment of it
                      </CardItem>
                      <CardItem
                        translateZ="100"
                        rotateX={20}
                        rotateZ={-10}
                        className="w-full mt-4"
                        width="90vw"
                        height="70vh"
                      >
                        <Image
                          src={src}
                          height={70}
                          width={400}
                          className="h-full w-full object-cover cursor-pointer  rounded-xl group-hover/card:shadow-xl"
                          alt={`Event ${index + 1}`}
                        />
                      </CardItem>

                    </CardBody>
                  </CardContainer>
                  {/* <Image src={src} width={345} height={200} alt={`Event ${index + 1}`} className="rounded-lg" /> */}
                </SwiperSlide>
              ))}
            </Swiper>


          </div>

        </section>
        <div className="text-2xl lg:pb-20 cursor-pointer rounded-xl text-center">
          <Link className="px-6 py-3  text-white text-2xl font-semibold rounded-xl shadow-lg hover:shadow-2xl bg-[#FFA500] transition-all duration-300" href="/">Click here to enroll in your favourite events!</Link>
        </div>
      </div>

      <div class="ribbon">
        <Image src="/encore25.png" width={2000} height={1000} class="ribbonImg" alt="/" />
      </div>

      <div className=" bg-[url('/bg1.jpg')] w-screen items-center flex flex-col justify-center text-center  bg-cover min-h-[50vh] bg-no-repeat bg-fixed">
        <div className="">
          <h2 className="text-3xl pt-5">Flashbacks</h2>
        </div>



        <AnimatedTestimonialsDemo2 />


      </div>



      <Footer />

    </main>
  );
}

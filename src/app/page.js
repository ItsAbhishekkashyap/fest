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




export default function Home() {



  return (
    <main className="main">
      {/* Background Image */}
      <div className="relative inset-0 w-screen bg-[url('/en.png')] bg-cover bg-center h-screen opacity-400 z-0">
        {/* <Image
          src="/en.png"
           width={345} height={200} alt="Example Image"
          layout="fill"
          objectFit="cover"
          quality={400}
        /> */}
        <HeroSection />
      </div>
      <StatsSection />







      <div className="relative flex flex-col gap-8 items-center justify-center bg-[url('/bg2.jpg')] bg-cover bg-center min-h-[70vh] bg-no-repeat bg-fixed px-8 py-16">
  <h2 className="text-5xl font-extrabold text-white drop-shadow-md text-center">
    About Encore 24
  </h2>
  <div className="bg-black/60 border border-gray-300 rounded-xl p-6 max-w-4xl">
    <p className="text-lg text-white leading-relaxed text-center">
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





      <div className=" bg-[url('/bg3.jpg')] bg-cover min-h-[50vh] bg-no-repeat bg-fixed" id="events">
        <h2 className="text-center pt-28 text-8xl">Events</h2>

        <section className="home" id="home">

          <div className=" p-32">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={30}
              slidesPerView={3}
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
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem]  rounded-xl p-6 border w-[100vh] h-[90vh]  ">
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
                        width="100vw"
                        height="100vh"
                      >
                        <Image
                          src={src}
                          height={100}
                          width={500}
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
        <div className="text-2xl lg:pb-20 cursor-pointer text-center">
          <Link className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-2xl font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300" href="/">Click here to enroll in your favourite events!</Link>
        </div>
      </div>

      <div class="ribbon">
        <Image src="/encore25.png" width={2000} height={1000} class="ribbonImg" alt="/" />
      </div>

      <div className=" bg-[url('/bg4.jpg')] items-center flex flex-col justify-center text-center  bg-cover min-h-[50vh] bg-no-repeat bg-fixed">
        <div className="">
          <h2 className="">Flashbacks</h2>
        </div>

        <section className="">
          <div className=" ">
            <div className=" flex flex-col gap-2">
              <Image src="/flashback/1.jpg" className="" width={400} height={400} alt="/" />
              <Image src="/flashback/2.jpg" className="" width={400} height={400} alt="/" />
              <Image src="/flashback/3.jpg" className="" width={400} height={400} alt="/" />
              <Image src="/flashback/4.jpg" className="" width={400} height={400} alt="/" />
            </div>
          </div>
        </section>

      </div>



      <Footer />

    </main>
  );
}

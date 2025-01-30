import Image from "next/image";
import { AnimatedTestimonialsDemo } from "./Animated";
import { motion } from "framer-motion";

export default function FilmFestival() {
  return (
    <div className="min-h-screen w-screen bg-black">
      {/* Header with Sign In */}
      <div className="absolute top-0 right-0 p-8">
        <div
          size="lg"
          className="bg-[#FFA500] hover:bg-[#FF8C00] text-black font-bold"
        >
          SIGN IN
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Orange Header Background */}
        <div className="bg-[#FFA500] w-full h-[270px] absolute top-0" />

        {/* Content */}
        <div className="relative pt-6 px-16">
          {/* Title */}
          {/* <h1 className="text-white text-[180px] leading-none font-bold tracking-tight">NAWABI <br></br> NOCTURNE.</h1> */}
          <div className="overflow-hidden">
            <motion.h1
              className="text-white text-[110px] leading-none font-bold tracking-tight"
              initial={{ x: "-100%", opacity: 0 }} // Start off-screen to the left
              animate={{ x: 0, opacity: 1 }} // Move to its final position
              transition={{ duration: 3.5, ease: "easeOut" }} // Animation duration and easing
            >
              NAWABI <br /> NOCTURNE.
            </motion.h1>
          </div>

          <AnimatedTestimonialsDemo />

          {/* Date */}
          <div className="">
            {/* <h2 className="text-[#FFA500] text-[100px] font-bold tracking-wider">
              9TH → 11TH MARCH
            </h2> */}
            <div className="overflow-hidden ">
            <motion.h1
              className="text-[#FFA500] text-[60px] font-bold tracking-wider"
              initial={{ x: "-100%", opacity: 0 }} // Start off-screen to the left
              animate={{ x: 0, opacity: 1 }} // Move to its final position
              transition={{ duration: 3.5, ease: "easeOut" }} // Animation duration and easing
            >
              9TH → 11TH MARCH
            </motion.h1>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

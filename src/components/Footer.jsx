import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faSmile } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

// const Footer = () => {

//   return (
//     <footer className="w-screen">
//     <div className=" flex justify-around items-center ">
//         <div className="">
//             <h3>Contact Us</h3>
//             <p>Email: encore@ietlucknow.ac.in</p>
//             <p>Phone: +91 </p>
//             <p>Address: Institute of Engineering and Technology, Lucnkow 226021</p>
//         </div>
//         <div className="">
//             <h3>Follow Us</h3>
//             <ul className="">
//                 <li><a href="https://www.facebook.com/EncoreIET?mibextid=ZbWKwL"><i className=""></i></a>
//                 </li>
//                 <li><a href=""><i className="fab fa-twitter"></i></a></li>
//                 <li><a href="https://www.instagram.com/encore.iet?igsh=dzQ5MGVmaWQxMTJh"><i
//                             className="fab fa-instagram"></i></a></li>
//                 <li><a href=""><i className="fab fa-linkedin"></i></a></li>
//             </ul>
//         </div>
//     </div>
//     <div className="text-center text-xl ">
//         <p>Institute of Engineering and Technology, Lucknow</p>
//     </div>
// </footer>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <div className="bg-black min-h w-screen flex flex-col lg:gap-32 items-center justify-center">
      <div className="text-left items-start flex gap-20  leading-none">
        <div className="flex flex-col items-center justify-center">
          {/* <h1 className="text-[100px] font-bold  text-white">GET SET GO</h1> */}
          <Image src="/logo3.png" alt="Example Image" className="" width={800} height={100} />
        </div>

        <Link href="write" className="hidden pt-10 md:block relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="300"
            viewBox="0 0 200 200"
            className="text-lg tracking-widest animate-spin slow-spin animatedButton "
          >
            {/* <!-- Circle --> */}
            <circle cx="100" cy="100" r="60" fill="none" />

            {/* <!-- Path for text --> */}
            <path
              id="circlePath"
              d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              fill="none"
            />

            {/* <!-- Text on circular path --> */}
            <text fill="orange">
              <textPath href="#circlePath" startOffset="0%">
                Take part in events •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Register now •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20  bg-black rounded-full flex item-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={500}
              height={80}
              viewBox="0 0 24 12"
            >
              <path
                d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                fill="white"
              />
            </svg>
          </button>
        </Link>
      </div>

      <div className="w-full max-w-screen-md flex justify-between  align-bottom px-4 py-4">
        <div className="text-left ">
          <h3 className="font-bold text-gray-700 hover:text-white mb-2">Encore</h3>
          <p className="text-gray-500 hover:text-white">©2025</p>
        </div>
        <div className="flex justify-around gap-16">
          <div className="text-gray-700 hover:text-white flex flex-col">
            <p>HOME</p>
            <p>EVENT</p>
            <p>ABOUT</p>
          </div>
          <div className="text-gray-700 hover:text-white flex flex-col">
            <p>CONTACT</p>
            <p>TERMS</p>
            <p>PRIVACY</p>
          </div>
          <div className="text-gray-700 hover:text-white flex flex-col">
            <p>INSTAGRAM</p>
            <p>FACEBOOK</p>{" "}
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-700 hover:text-white mb-2">Contact Us</p>
          <button className="bg-gray-700 hover:text-white hover:bg-gray-800 w-full text-white font-bold py-2 px-4 rounded-full">
            +91 9175408641
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

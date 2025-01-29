import React from "react";

const Footer = () => {
  return (
    <footer>
    <div className=" flex justify-around items-center ">
        <div className="">
            <h3>Contact Us</h3>
            <p>Email: encore@ietlucknow.ac.in</p>
            <p>Phone: +91 </p>
            <p>Address: Institute of Engineering and Technology, Lucnkow 226021</p>
        </div>
        <div className="">
            <h3>Follow Us</h3>
            <ul className="">
                <li><a href="https://www.facebook.com/EncoreIET?mibextid=ZbWKwL"><i className=""></i></a>
                </li>
                <li><a href=""><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/encore.iet?igsh=dzQ5MGVmaWQxMTJh"><i
                            className="fab fa-instagram"></i></a></li>
                <li><a href=""><i className="fab fa-linkedin"></i></a></li>
            </ul>
        </div>
    </div>
    <div className="text-center text-xl ">
        <p>Institute of Engineering and Technology, Lucknow</p>
    </div>
</footer>
  );
};

export default Footer;
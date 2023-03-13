import React from "react";
import img2 from "../../images/Vector 16.png";

const Footer = () => {
  return (
    <div className="relative w-full ">
      <footer className="h-[400px] sm:h-auto absolute z-10 bottom-0  w-full footerbg p-16 flex flex-wrap justify-evenly items-center gap-5 sm:gap-16">
        <div className="dark:text-white text-black flex flex-col w-[140px] h-[100px]">
          <span>Home</span>
          <span>Why Us</span>
          <span>Services</span>
        </div>
        <div className="dark:text-white text-black flex flex-col  w-[140px] h-[100px]">
          <span>Contact Us</span>
          <span>Transaction Details</span>
          <span>Testimonials</span>
        </div>
        <div className="dark:text-white text-black flex flex-col  w-[140px] h-[100px]">
          <span>Business Listing</span>
          <span>Our Team</span>
          <span>Our partners</span>
        </div>
        <div className="dark:text-white text-black flex flex-col  w-[140px] h-[100px]">
          <span>Contact Details</span>
          <p className="ml-4 text-sm">+800 526 8296</p>
          <span className="h-6"></span>
        </div>
      </footer>
      <img className="absolute z-0 bottom-0" src={img2} alt="" />
    </div>
  );
};

export default Footer;

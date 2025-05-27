import React from 'react';
import Image from 'next/image';
import Logo from "../../../public/logo.webp";
import FootOne from "../../assets/footg.webp";
import FootTwo from "../../assets/footg2.webp";
import FootThree from "../../assets/footg3.webp";
import FootFour from "../../assets/footg4.webp";
import FootFive from "../../assets/footg5.webp";
import FootSix from "../../assets/footg6.webp";
import { FaPhone, FaXTwitter, FaInstagram, FaEnvelope, FaFacebookF, FaPinterest } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1e1e1e] text-white w-full px-6 py-12">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          {/* Column 1 */}
          <div className="w-full lg:w-1/4 bg-[#272727] p-6 rounded-lg">
            <Image src={Logo} alt="logo" className="w-28 h-auto" />
            <p className="uppercase font-serif text-2xl mt-6 mb-4">Contact Info</p>

            <div className="flex items-center gap-2 text-[#acacac] text-sm mb-2">
              <FaPhone className="text-[#c29d68]" />
              <a href="tel:+91-9971834111">+91-9971834111</a>
            </div>

            <div className="flex items-center gap-2 text-sm mb-2 text-[#acacac]">
              <FaEnvelope className="text-[#c29d68]" />
              <a href="mailto:Manali@rchr.in">Manali@rchr.in</a>
            </div>

            <div className="flex items-start gap-2 text-[#acacac] text-sm mb-6">
              <IoLocationSharp className="text-[#c29d68] text-xl mt-1" />
              <span>Kanyal Rd, Simsa, Rangri, Manali, HP-175131</span>
            </div>

            <ul className="flex gap-3">
              {[FaFacebookF, FaXTwitter, FaInstagram, FaPinterest].map((Icon, i) => (
                <li key={i} className="h-10 w-10 flex items-center justify-center rounded-full bg-[#c29d68]">
                  <a href="#"><Icon className="text-white text-xl" /></a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="w-full lg:w-1/4 p-6">
            <h3 className="text-xl mb-4 uppercase font-serif">Useful Links</h3>
            <ul className="text-[#acacac] space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Rooms & Suites</a></li>
              <li><a href="#">Reservations</a></li>
              <li><a href="#">Amenities</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full lg:w-1/4 bg-[#272727] p-6 rounded-lg">
            <h3 className="text-xl mb-4 uppercase font-serif">Gallery</h3>
            <div className="grid grid-cols-3 gap-3">
              {[FootOne, FootTwo, FootThree, FootFour, FootFive, FootSix].map((img, index) => (
                <Image key={index} src={img} alt="foot" className="w-full h-20 object-cover" />
              ))}
            </div>
          </div>

          {/* Column 4 */}
          <div className="w-full lg:w-1/4 bg-[#272727] p-6 rounded-lg">
            <h3 className="text-xl mb-4 uppercase font-serif">Newsletter</h3>
            <p className="text-[#acacac] mb-4">Subscribe to our newsletter.</p>
            <form onSubmit={""}>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="h-12 w-full bg-white text-black text-center mb-4 px-2 rounded"
              />
              <button
                type="submit"
                className="h-12 w-full bg-[#c19d68] text-white font-serif rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>

      {/* Bottom Footer Note */}
      <div className="bg-black text-white text-center py-4 text-sm uppercase font-serif">
        ©2025, Royal Collection Hotel. All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;

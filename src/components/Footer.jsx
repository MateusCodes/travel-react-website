import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';

const Footer = () => {

  return (
    <footer data-aos="fade-up" className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1>BEACHES.</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icon text-[#5651e5]" />
            <FaTwitter className="icon text-[#5651e5]" />
            <FaYoutube className="icon text-[#5651e5]" />
            <FaPinterest className="icon text-[#5651e5]" />
            <FaInstagram className="icon text-[#5651e5]" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex">
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className="text-right lg:flex">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#destinations">Destinations</a>
            </li>
            <li>
              <a href="#travel">Travel</a>
            </li>
            <li>
              <a href="#view">View</a>
            </li>
            <li>
              <a href="#book">Book</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

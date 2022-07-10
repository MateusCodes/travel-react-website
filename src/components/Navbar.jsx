import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = React.useState(false);

  const [logo, setLogo] = React.useState(false);

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <header id="home" className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>
          Beaches
        </h1>
      </div>

      <ul className="hidden md:flex">
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

      <div className="hidden md:flex">
        <BiSearch className="mr-3" size={30} />
        <BsPerson size={30} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden cursor-pointer z-10">
        {nav ? <AiOutlineClose size={30} /> : <HiOutlineMenuAlt4 size={30} />}
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col duration-300'
            : 'absolute left-[-100%]'
        }
      >
        <ul>
          <h1>Beaches</h1>
          <li className="border-b">
            <a href="#home">Home</a>
          </li>
          <li className="border-b">
            <a href="#destinations">Destinations</a>
          </li>
          <li className="border-b">
            <a href="#travel">Travel</a>
          </li>
          <li className="border-b">
            <a href="#view">View</a>
          </li>
          <li className="border-b">
            <a href="#book">Book</a>
          </li>
          <div className="flex flex-col">
            <button className="my-6 bg-gradient-to-r from-[#5651e5] to-[#709dff]">
              Search
            </button>
            <button className="bg-gradient-to-r from-[#5651e5] to-[#709dff]">
              Account
            </button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon text-[#5651e5]" />
            <FaTwitter className="icon text-[#5651e5]" />
            <FaYoutube className="icon text-[#5651e5]" />
            <FaPinterest className="icon text-[#5651e5]" />
            <FaInstagram className="icon text-[#5651e5]" />
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

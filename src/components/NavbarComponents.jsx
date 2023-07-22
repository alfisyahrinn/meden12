import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
export default function NavbarComponents() {
  const [navActive, setNavActive] = useState(false);
  const handleNavbar = () => {
    console.log(navActive);
    setNavActive(!navActive);
  };
  return (
    <div className="flex items-center justify-between font-montserrat lg:mb-[61px] mb-[36px]">
      <p className="font-bold text-2xl">meden12</p>
      <button onClick={handleNavbar} className="flex flex-col items-end md:hidden">
        <span className="w-[20px] bg-black h-[2px] my-1 block"></span>
        <span className="w-[25px] bg-black h-[2px] my-1 block "></span>
        <span className="w-[30px] bg-black h-[2px] my-1 block "></span>
      </button>
      <nav
        className={`absolute mt-10 text-3xl md:text-[18px] pt-5 pr-3 md:pr-0 md:pt-0 space-y-5 md:space-y-0  w-[170px] h-[130px]  md:h-[0px] text-right md:bg-transparent right-0  z-10 top-0 md:relative md:flex md:gap-5 md:mt-0 md:mr-0 [&:not(:hover)>a]:opacity-100 [&>a]:transition-opacity transition-all duration-400 ease-in-out ${
          navActive ? '' : 'top-[-490px]'
        }`}
      >
        <NavLink to="/" className="block md:flex [&:not(:hover)]:opacity-50 active:text-blue-800 active:font-medium text-gray-500">
          Home
        </NavLink>
        <NavLink to="nulis" className="block md:flex [&:not(:hover)]:opacity-50 active:text-blue-800 active:font-medium text-gray-500">
          Nulis
        </NavLink>
        <NavLink to="shop" className="hidden  md:flex [&:not(:hover)]:opacity-50 active:text-blue-800 active:font-medium text-gray-500">
          Shop
        </NavLink>
      </nav>
    </div>
  );
}

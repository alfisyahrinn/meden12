import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export default function NavbarComponents() {
  return (
    <div className="flex items-center justify-between font-montserrat lg:mb-[61px] mb-[36px]">
      <p className="font-bold text-2xl">meden12</p>
      <nav className="flex gap-5 [&:not(:hover)>a]:opacity-100 [&>a]:transition-opacity">
        <NavLink to="/" className="[&:not(:hover)]:opacity-50 active:text-blue-800 active:font-medium text-gray-500">
          Home
        </NavLink>
        <NavLink to="nulis" className="[&:not(:hover)]:opacity-50 active:text-blue-800 active:font-medium text-gray-500">
          Nulis
        </NavLink>
        <NavLink to="shop" className="[&:not(:hover)]:opacity-50 active:text-blue-800 active:font-medium text-gray-500">
          Shop
        </NavLink>
      </nav>
    </div>
  );
}

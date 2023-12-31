import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HeroLeft() {
  return (
    <div className="mx-1 md:w-[638px] md:mx-0">
      <p className="font-montserrat md:text-[40px] text-[28px] mb-[16px] md:mb-[24px]">
        Kalo kata motivasi pak abdi "kalau kalian ada <span className="font-medium">masalah</span> jangan lari dari masalah tapi <span className="font-medium">hadapi</span> masalahnya"
      </p>
      <NavLink to="nulis" className="w-[104px] h-9 font-montserrat font-medium px-[15px] py-2 bg-black text-white hover:bg-transparent hover:text-black hover:border-black hover:border-2 duration-75 transition-colors">
        Ayo Joki
      </NavLink>
    </div>
  );
}

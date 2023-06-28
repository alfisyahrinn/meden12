import React from 'react';
import { HeroImg } from '../assets/image/hero';
import { NavLink } from 'react-router-dom';
export default function Home() {
  return (
    <div className="flex items-center">
      <div className="w-[638px]">
        <p className="font-montserrat text-[40px] mb-[24px]">
          Kalo kata motivasi pak abdi "kalau kalian ada <span className="font-medium">masalah</span> jangan lari dari masalah tapi <span className="font-medium">hadapi</span> masalahnya"
        </p>
        <NavLink to="nulis" className="w-[104px] h-9 font-montserrat font-medium px-[15px] py-2 bg-black text-white hover:bg-transparent hover:text-black hover:border-black hover:border-2">
          Ayo Joki
        </NavLink>
      </div>
      <div className="w-[508px]">
        <img src={HeroImg} alt="Nulislah Bro" />
      </div>
    </div>
  );
}

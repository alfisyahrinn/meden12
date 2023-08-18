import React from 'react';
export default function Shop() {
  let fontName = 'itting.ttf';
  let filter = fontName.slice(0, fontName.length - 4);
  console.log(filter);
  return (
    <div className="text-red-500">
      Ini halaman <span className="font-bold">SHOPPING</span>
      <canvas className="w-80 h-80 bg-red-500 text-white" defaultValue="loremisahduagsfuga sfugasfbgasf">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam soluta alias explicabo cupiditate ipsa, sequi error. Ipsa sed beatae temporibus dignissimos, itaque veniam aliquam, earum suscipit accusamus ut nihil voluptates?</p>
      </canvas>
    </div>
  );
}

import React, { createRef } from 'react';
import html2canvas from 'html2canvas';

export default function NulisRight({ data }) {
  document.documentElement.style.setProperty('--size', data.size + 'px');
  document.documentElement.style.setProperty('--top', data.top + 'px');
  document.documentElement.style.setProperty('--bottom', data.bottom + 'px');
  document.documentElement.style.setProperty('--right', data.right + 'px');
  document.documentElement.style.setProperty('--left', data.left + 'px');
  document.documentElement.style.setProperty('--height', data.height + 'px');
  document.documentElement.style.setProperty('--color', data.color);
  // const color = getComputedStyle(document.documentElement).getPropertyValue('--font');
  // console.log(color);

  return (
    <div className="lg:w-[600px] lg:overflow-scroll lg:h-[80vh]">
      <div className=" relative">
        <div className="h-[700px] lg:h-[540px]" id="image-container">
          <p id="mantap" className=" absolute font-custom1 top-0  px-3 mt-14" style={{ whiteSpace: 'pre-wrap' }}>
            {data.text}
          </p>
        </div>
      </div>
    </div>
  );
}

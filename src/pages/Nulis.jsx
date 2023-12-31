import React, { useState } from 'react';
import { NulisLeft, NulisRight } from '../components/Nulis';
import html2canvas from 'html2canvas';

const dataAwal = {
  size: 12,
  height: 14.5,
  top: 56,
  bottom: 0,
  right: 12,
  left: 12,
  text: '',
  color: '#000',
};
export default function NulisComponent() {
  const [data, setData] = useState(dataAwal);

  const handleDownload = (e) => {
    e.preventDefault();
    const element = document.getElementById('image-container');
    html2canvas(element).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'Pak-dia-pake-bot';
      link.href = canvas.toDataURL();
      canvas.hidden;
      link.click();
    });
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:gap-[110px] lg:items-center content-center ">
      <NulisLeft setData={setData} data={data} handleDownload={handleDownload} />
      <NulisRight data={data} />
    </div>
  );
}

import React, { useState } from 'react';
import { NulisLeft, NulisRight } from '../components/Nulis';
import html2canvas from 'html2canvas';

const dataAwal = {
  size: 12,
  height: 14,
  top: 56,
  bottom: 0,
  right: 12,
  left: 12,
  text: '',
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
    <div className="flex gap-[110px] items-center">
      <NulisLeft setData={setData} data={data} handleDownload={handleDownload} />
      <NulisRight data={data} />
    </div>
  );
}

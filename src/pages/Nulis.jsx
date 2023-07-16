import React, { useState } from 'react';
import { NulisLeft, NulisRight } from '../components/Nulis';

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
  return (
    <div className="flex gap-[110px] items-center">
      <NulisLeft setData={setData} data={data} />
      <NulisRight data={data} />
    </div>
  );
}

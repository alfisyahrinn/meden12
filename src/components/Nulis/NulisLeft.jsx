import React from 'react';
const dataFont = [{ font: 'HandwritingCR 2' }, { font: 'Shadow Into Light' }, { font: 'My Handwriting' }];
const dataKertas = [{ kertas: 'Hvs' }, { kertas: 'Duble Folio' }, { kertas: 'Kertas Jeruk' }];

export default function NulisLeft({  setData, data }) {
  const handleData = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  return (
    <div className=" w-full ">
      <form action="">
        <div className="flex gap-3">
          <div className="w-full space-y-[8px]">
            <label className="text-[16px]">Font</label>
            <select id="font" className="py-3 px-4 pr-9 block w-full text-sm bg-gray-100 ">
              {dataFont.map((item, index) => (
                <option className="text-gray-600" key={index}>
                  {item.font}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full space-y-[8px]">
            <label className="text-[16px]">Kertas</label>
            <select id="font" className="py-3 px-4 pr-9 block w-full text-sm bg-gray-100 ">
              {dataKertas.map((item, index) => (
                <option className="text-gray-600" key={index}>
                  {item.kertas}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex gap-3 mt-[24px]">
          <div className="space-y-[8px]">
            <label className="text-[16px]">Size</label>
            <input name="size" value={data.size} onChange={handleData} id="size" type="number" className="py-3 px-4 pr-9 block w-full text-sm bg-gray-100 " />
          </div>
          <div className="space-y-[8px]">
            <label className="text-[16px]">Height</label>
            <input name="height" value={data.height} onChange={handleData} id="height" type="number" className="py-3 px-4 pr-9 block w-full text-sm bg-gray-100 " />
          </div>
          <div className="space-y-[8px]">
            <label className="text-[16px]">Top</label>
            <input name="top" value={data.top} onChange={handleData} id="top" type="number" className="py-3 px-4 pr-9 block w-full text-sm bg-gray-100 " />
          </div>
          <div className="space-y-[8px]">
            <label className="text-[16px]">Bottom</label>
            <input name="bottom" value={data.bottom} onChange={handleData} id="bottom" type="number" className="py-3 px-4 pr-9 block w-full text-sm bg-gray-100 " />
          </div>
          <div className="space-y-[8px]">
            <label className="text-[16px]">Right</label>
            <input value={data.right} name="right" onChange={handleData} id="right" type="number" className="py-3 px-4 pr-9 block w-full text-sm bg-gray-100 " />
          </div>
          <div className="space-y-[8px]">
            <label className="text-[16px]">Left</label>
            <input value={data.left} id="left" onChange={handleData} name="left" type="number" className="py-3 px-4 pr-9 block w-full text-sm bg-gray-100 " />
          </div>
        </div>
        <div className="mt-[24px] space-y-[8px]">
          <label className="text-[16px]">Teksssss</label>
          <textarea onChange={handleData} name='text' id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 " placeholder="di negara saya banyak sekali tikus..."></textarea>
        </div>
        <div className="mt-[24px] space-x-[16px]">
          <button className="w-[114px] h-9 bg-black text-white font-medium">Download</button>
          <button className="w-[83px] h-9 border border-black font-medium">Hapus</button>
        </div>
      </form>
    </div>
  );
}

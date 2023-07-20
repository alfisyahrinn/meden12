import React from 'react';
import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Angelina from '../../assets/fonts/angelina.ttf';
const dataFont = [
  { font: '212BabyGirl.otf' },
  { font: '212LeahleeSans.ttf' },
  { font: '99HandWritting.ttf' },
  { font: 'ACasualHandwrittenPenNoncommercial.ttf' },
  { font: 'ADayinSeptember.otf' },
  { font: 'Alittlesunshine.ttf' },
  { font: 'And-This-Happened.ttf' },
  { font: 'angelina.ttf' },
  { font: 'annshandwriting.ttf' },
  { font: 'ASMelanieHandwritting.ttf' },
  { font: 'AvenirCondensedHand.ttf' },
  { font: 'Avocados.ttf' },
  { font: 'BabyDoll.ttf' },
  { font: 'BattleOfKingsRegular.ttf' },
  { font: 'BrayNotes.ttf' },
  { font: 'Ceker-Ampela.ttf' },
  { font: 'Ceker-Ucus.ttf' },
  { font: 'ComingSoon.ttf' },
  { font: 'Convered-By-Your-Grace.ttf' },
  { font: 'Edoms-Handwritting-Normal.ttf' },
  { font: 'GloriaHallelujah-Regular.ttf' },
  { font: 'HandwritingCR-2.ttf' },
  { font: 'HandwritingMain-Regular.ttf' },
  { font: 'Karenina-Handwriting.ttf' },
  { font: 'Kempton-Demo-Handwritting.ttf' },
  { font: 'kiwischoolhandwritingregular.ttf' },
  { font: 'luna.ttf' },
  { font: 'michellehandwritting.ttf' },
  { font: 'MyHandsareHoldingYou.ttf' },
  { font: 'My_handwriting.ttf' },
  { font: 'My_Unprofessional_Handwriting.ttf' },
  { font: 'Nadeznas-Handwritting.ttf' },
  { font: 'SchoolboySam.otf' },
  { font: 'ShadowsIntoLight-Regular.ttf' },
  { font: 'ShadowsIntoLight.ttf' },
  { font: 'Zahraaa.ttf' },
  { font: 'ZueyHandwriting-Regular.otf' },
];
const dataKertas = [{ kertas: 'buku_1.jpg' }, { kertas: 'buku_2.jpg' }, { kertas: 'buku_3.jpg' }, { kertas: 'buku_4.jpg' }, { kertas: 'folio.png' }, { kertas: 'folio_1.jpg' }, { kertas: 'folio_2.jpg' }, { kertas: 'hvs.jpg' }];
export default function NulisLeft({ setData, data, handleDownload }) {
  const [atribut, setAtribut] = useState({
    font: 'angelina.ttf',
    kertas: 'folio.png',
  });
  console.log(atribut);
  const handleAtribut = (e) => {
    setAtribut({ ...atribut, [e.target.name]: e.target.value });
  };
  const handleData = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Custom-1';
    src: url(/src/assets/fonts/${atribut.font});
  }
  #image-container{
    background-image: url('/src/assets/image/kertas/${atribut.kertas}');
  }
  `;

  return (
    <div className="w-full mt-[16px]">
      <GlobalStyle />
      <form action="">
        <div className="flex gap-3">
          <div className="w-full space-y-[8px]">
            <label className="text-[16px]">Font</label>
            <select id="font" className="py-3 px-4  block w-full text-sm bg-gray-100 " value={atribut.font} name="font" onChange={handleAtribut}>
              {dataFont.map((item, index) => (
                <option className="text-gray-600" value={item.font} key={index}>
                  {item.font.slice(0, item.font.length - 4)}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full space-y-[8px]">
            <label className="text-[16px]">Kertas</label>
            <select id="kertas" name="kertas" value={atribut.kertas} onChange={handleAtribut} className="py-3 px-4  block w-full text-sm bg-gray-100 ">
              {dataKertas.map((item, index) => (
                <option className="text-gray-600" value={item.kertas} key={index}>
                  {item.kertas.slice(0, item.kertas.length - 4)}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex gap-3 mt-[24px] lg:flex-nowrap flex-wrap">
          <div className="space-y-[8px]">
            <label className="text-[16px]">Size</label>
            <input name="size" value={data.size} onChange={handleData} id="size" type="number" className="py-3 px-4 block w-[140px] lg:w-full text-sm bg-gray-100 " />
          </div>
          <div className="space-y-[8px]">
            <label className="text-[16px]">Line Height</label>
            <input name="height" value={data.height} onChange={handleData} id="height" type="text" className="py-3 px-4  block w-[140px] lg:w-full text-sm bg-gray-100 " />
          </div>
          <div className="space-y-[8px]">
            <label className="text-[16px]">Top</label>
            <input name="top" value={data.top} onChange={handleData} id="top" type="number" className="py-3 px-4  block w-[140px] text-sm lg:w-full bg-gray-100 " />
          </div>
          <div className="space-y-[8px] hidden">
            <label className="text-[16px]">Bottom</label>
            <input name="bottom" value={data.bottom} onChange={handleData} id="bottom" type="number" className="py-3 px-4  block w-[140px] lg:w-full text-sm bg-gray-100 " />
          </div>
          <div className="space-y-[8px]">
            <label className="text-[16px]">Right</label>
            <input value={data.right} name="right" onChange={handleData} id="right" type="number" className="py-3 px-4  block w-[140px] lg:w-full text-sm bg-gray-100 " />
          </div>
          <div className="space-y-[8px]">
            <label className="text-[16px]">Left</label>
            <input value={data.left} id="left" onChange={handleData} name="left" type="number" className="py-3 px-4  block w-[140px] lg:w-full text-sm bg-gray-100 " />
          </div>
          <div className="space-y-[8px]">
            <label className="text-[16px]">Color</label>
            <input type="color" className="h-[44px] p-0" name="color" value={data.color} onChange={handleData} />
          </div>
        </div>
        <div className="mt-[24px] space-y-[8px]">
          <label className="text-[16px]">Teksssss</label>
          <textarea onChange={handleData} name="text" id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 " placeholder="di negara saya banyak sekali tikus..."></textarea>
        </div>

        <div className="my-[24px] space-x-[16px]">
          <button onClick={handleDownload} className="w-[114px] h-9 bg-black text-white font-medium">
            Download
          </button>
          <button type="reset" className="w-[83px] h-9 border border-black font-medium">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

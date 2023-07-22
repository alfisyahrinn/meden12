import React from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';
export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row  items-center">
      <HeroLeft />
      <HeroRight />
    </div>
  );
}

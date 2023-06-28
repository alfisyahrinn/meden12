import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'
export default function Hero() {
  return (
    <div className="flex items-center">
      <HeroLeft/>
      <HeroRight/>
    </div>
  )
}

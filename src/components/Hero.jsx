import React from 'react'
import hero from '../assets/hero_bg.png'
import {ThemeSwitch} from "../components/ThemeSwitch"
import '../styles/_hero.sass'

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__img">
        <img src={hero} alt="" />
      </div>
      <div className="hero__copy">
        <h1>Where in the world?</h1>
      </div>
    </div>
  )
}

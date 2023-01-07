import React from 'react'
import Logo from '../logo'
import bgImg from '../../images/pexels-alex-andrews-3805983.jpg'

const Hero = () => {
  return (
    <section>
      <Logo />
      <h1>Welcome to sections</h1>
      <img src={bgImg} alt='stars' />
    </section>
  )
}

export default Hero
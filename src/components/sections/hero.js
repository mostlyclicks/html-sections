import React from 'react'
import styled from 'styled-components'
import Logo from '../logo'
import bgImg from '../../images/pexels-alex-andrews-3805983.jpg'

const Hero = () => {
  return (
    <StyledHeroSection>
      <Logo />
      <h1>Welcome to Sections</h1>
    </StyledHeroSection>
  )
}

export default Hero


const StyledHeroSection = styled.section`
  background-image:url(${bgImg});
  width:100%;
  min-height:500px;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  color:#ffffff;
`
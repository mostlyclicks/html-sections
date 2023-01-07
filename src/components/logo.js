import React from 'react'
import styled from 'styled-components'
import ReactLogo from '../images/logo2.svg'

const Logo = () => {
  return (
    <StyledImg src={ReactLogo} alt='Logo' />
  )
}

export default Logo

const StyledImg = styled.img`
  width:150px;
  
`
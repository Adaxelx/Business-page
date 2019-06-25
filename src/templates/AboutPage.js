import React from 'react'
import styled from 'styled-components'

import logo from '../images/logo.png'

const StyledAboutPage = styled.div`
  width: 100%;
  height: 100vh;
`

const StyledImg = styled.img`
  width: 200px;
  height: 150px;
`

const AboutPage = () => (
  <>
    <StyledAboutPage>
      <h1>Abbout</h1>
      <StyledImg src={logo} />
    </StyledAboutPage>
  </>
)

export default AboutPage

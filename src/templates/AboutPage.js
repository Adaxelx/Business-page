import React from 'react'
import styled from 'styled-components'
import H2 from '../components/headers/H2'
import logo from '../images/logo.png'

const StyledAboutPage = styled.article`
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
      <H2>About</H2>
      <StyledImg src={logo} />
    </StyledAboutPage>
  </>
)

export default AboutPage

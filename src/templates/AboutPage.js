import React from 'react'
import styled from 'styled-components'

import H2 from '../components/headers/H2'
import H3 from '../components/headers/H3'
import logo from '../images/logo.png'
import P from '../components/Paragraph/P'
import Logo from '../components/Logo'

const StyledAboutPage = styled.div`
  width: 100%;

  text-align: center;
  background-color: rgb(194, 194, 206);

  padding: 40px 15px;
`

const AboutPage = () => (
  <>
    <StyledAboutPage>
      <H2>About</H2>
      <Logo src={logo} />
      <H3>Who are we?</H3>
      <P>
        Cupidatat consectetur pariatur voluptate esse aliquip exercitation deserunt non et laborum
        tempor ullamco. Officia proident ipsum occaecat non. Dolore sunt do consectetur laboris amet
        amet aliqua sunt id nostrud. Anim qui magna est excepteur. Dolor eiusmod fugiat veniam enim
        reprehenderit do minim sint officia officia non eu laboris. Mollit tempor labore adipisicing
        anim velit ut aliqua reprehenderit nostrud. Tempor magna adipisicing velit consectetur aute
        proident sunt culpa ex aliqua.
      </P>
    </StyledAboutPage>
  </>
)

export default AboutPage

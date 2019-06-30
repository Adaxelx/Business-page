import React from 'react'
import styled from 'styled-components'
import device from './MediaWidth'
import H2 from '../components/headers/H2'
import H3 from '../components/headers/H3'
import logo from '../images/logo.png'
import P from '../components/Paragraph/P'
import Logo from '../components/Logo'

const StyledAboutPage = styled.div`
  width: 100%;
  text-align: center;
  background-color: ${({ theme }) => theme.grey};
  padding: ${({ theme }) => theme.padding};
`

const StyledCon = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.mobileS} and (orientation: landscape),
    ${device.tablet} and (orientation: portrait) {
    margin-top: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`

const StyledContent = styled.section`
  width: 90%;
  @media ${device.mobileS} and (orientation: landscape),
    ${device.tablet} and (orientation: portrait) {
    width: 50%;
  }
`

const AboutPage = () => (
  <>
    <StyledAboutPage>
      <H2>About</H2>
      <StyledCon>
        <Logo src={logo} />
        <StyledContent>
          <H3>Who are we?</H3>
          <P>
            Cupidatat consectetur pariatur voluptate esse aliquip exercitation deserunt non et
            laborum tempor ullamco. Officia proident ipsum occaecat non. Dolore sunt do consectetur
            laboris amet amet aliqua sunt id nostrud. Anim qui magna est excepteur. Dolor eiusmod
            fugiat veniam enim reprehenderit do minim sint officia officia non eu laboris. Mollit
            tempor labore adipisicing anim velit ut aliqua reprehenderit nostrud. Tempor magna
            adipisicing velit consectetur aute proident sunt culpa ex aliqua.
          </P>
        </StyledContent>
      </StyledCon>
    </StyledAboutPage>
  </>
)

export default AboutPage

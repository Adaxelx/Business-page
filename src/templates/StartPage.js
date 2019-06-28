import React from 'react'
import styled from 'styled-components'

import startpage from '../images/startpage.jpg'

const StyledStartPage = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  background: url(${startpage}) no-repeat center center fixed;
  background-size: cover;
  color: white;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to bottom, rgb(2, 92, 145), rgb(63, 66, 73), rgb(63, 66, 73));
    opacity: 0.6;
  }
`

const StyledTitle = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 7rem;
`

const StyledH2 = styled.h1`
  text-align: center;
  font-size: 2rem;
`

const StyledArrow = styled.button`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  background-color: transparent;
  border: 0;

  font-size: 3rem;
  color: white;
`

class StartPage extends React.Component {
  handleClick = () => {
    window.scrollBy(0, window.innerHeight)
  }

  render() {
    return (
      <StyledStartPage>
        <StyledTitle>
          <StyledH1>Haku</StyledH1>
          <StyledH2>We are cool</StyledH2>
        </StyledTitle>
        <StyledArrow onClick={this.handleClick}>X</StyledArrow>
      </StyledStartPage>
    )
  }
}

// const StartPage = () => (

// )

export default StartPage

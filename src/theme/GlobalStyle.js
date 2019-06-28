import { createGlobalStyle } from 'styled-components'
import device from '../templates/MediaWidth'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-size: 1.6rem;
  }

  @media ${device.tablet} and (orientation: portrait){
    html{
      font-size: 100%
    }
  }
  @media ${device.laptop} and (orientation: portrait){
    html{
      font-size: 125%
    }
  }
  @media ${device.laptopL} and (orientation: portrait){
    html{
      font-size: 250%
    }
  }
`

export default GlobalStyle

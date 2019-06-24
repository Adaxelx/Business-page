import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import GlobalStyle from '../GlobalStyle/GlobalStyle'
import StartPage from '../templates/StartPage'

const StyledButton = styled.button`
  height: 100px;
  width: 40px;
  background-color: cadetblue;
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <StartPage>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StyledButton>123</StyledButton>
      <Link to="/page-2/">Go to page 2</Link>
    </StartPage>
  </>
)

export default IndexPage

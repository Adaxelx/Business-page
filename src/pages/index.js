import React from 'react'
import styled from 'styled-components'

import GlobalStyle from '../GlobalStyle/GlobalStyle'
import StartPage from '../templates/StartPage'
import Nav from '../components/Nav/Nav'

const StyledDiv = styled.div`
  height: 100vh;
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Nav />
    <StartPage />
    <StyledDiv>123</StyledDiv>
  </>
)

export default IndexPage

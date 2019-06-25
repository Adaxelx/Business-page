import React from 'react'

import GlobalStyle from '../GlobalStyle/GlobalStyle'
import StartPage from '../templates/StartPage'
import OfferPage from '../templates/OfferPage'
import Nav from '../components/Nav/Nav'

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Nav />
    <StartPage />
    <OfferPage />
  </>
)

export default IndexPage

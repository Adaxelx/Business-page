import React from 'react'

import GlobalStyle from '../GlobalStyle/GlobalStyle'
import StartPage from '../templates/StartPage'
import OfferPage from '../templates/OfferPage'
import AboutPage from '../templates/AboutPage'
import Nav from '../components/Nav/Nav'

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Nav />
    <StartPage />
    <OfferPage />
    <AboutPage />
  </>
)

export default IndexPage

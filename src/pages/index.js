import React from 'react'

import GlobalStyle from '../GlobalStyle/GlobalStyle'
import StartPage from '../templates/StartPage'
import OfferPage from '../templates/OfferPage'
import AboutPage from '../templates/AboutPage'
import ContactPage from '../templates/ContactPage'
import Nav from '../components/Nav/Nav'

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Nav />
    <StartPage />
    <OfferPage />
    <AboutPage />
    <ContactPage />
  </>
)

export default IndexPage

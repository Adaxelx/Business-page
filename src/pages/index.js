import React from 'react'

import Layout from '../components/layout'

import StartPage from '../templates/StartPage'
import OfferPage from '../templates/OfferPage'
import AboutPage from '../templates/AboutPage'
import ContactPage from '../templates/ContactPage'

const IndexPage = () => (
  <>
    <Layout index={1}>
      <StartPage />
      <OfferPage />
      <AboutPage />
      <ContactPage />
    </Layout>
  </>
)

export default IndexPage

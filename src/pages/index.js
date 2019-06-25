import React from 'react'

import StartPage from '../templates/StartPage'
import OfferPage from '../templates/OfferPage'
import AboutPage from '../templates/AboutPage'
import Layout from '../components/layout'

const IndexPage = () => (
  <>
    <Layout>
      <StartPage />
      <OfferPage />
      <AboutPage />
    </Layout>
  </>
)

export default IndexPage

import React from 'react'
import GlobalStyle from '../GlobalStyle/GlobalStyle'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'

export default ({ children, index }) => (
  <>
    <GlobalStyle />
    <Nav index={index} />
    {children}
    <Footer />
  </>
)

import React from 'react'
import GlobalStyle from '../GlobalStyle/GlobalStyle'
import Nav from './Nav/Nav'

export default ({ children }) => (
  <>
    <GlobalStyle />
    <Nav />
    {children}
  </>
)

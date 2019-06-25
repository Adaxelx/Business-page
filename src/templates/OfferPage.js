import React from 'react'
import styled from 'styled-components'

import H2 from '../components/headers/H2'

import search from '../images/search.png'

const StyledOfferPage = styled.div`
  width: 100%;

  padding: 40px 0;

  background-color: #f2ba2b;

  text-align: center;
  z-index: 100;
`

const StyledSearch = styled.div`
  width: 200px;
  height: 200px;

  margin: 0 auto;

  background: url(${search}) no-repeat center center;
  background-size: cover;
`

const OfferPage = () => (
  <StyledOfferPage>
    <H2>Offer</H2>
    <StyledSearch />
    <h3>Develop Websites</h3>
    <p>
      Magna consectetur id ex velit ullamco reprehenderit id amet ut cillum. Exercitation
      consectetur nisi dolor voluptate eu do labore cupidatat ipsum voluptate occaecat adipisicing
      eu.
    </p>
    <StyledSearch />
    <h3>Develop Websites</h3>
    <p>
      Magna consectetur id ex velit ullamco reprehenderit id amet ut cillum. Exercitation
      consectetur nisi dolor voluptate eu do labore cupidatat ipsum voluptate occaecat adipisicing
      eu.
    </p>
  </StyledOfferPage>
)

export default OfferPage

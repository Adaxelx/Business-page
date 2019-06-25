import React from 'react'
import styled from 'styled-components'

import H2 from '../components/headers/H2'
import H3 from '../components/headers/H3'

import search from '../images/search.png'
import laptop from '../images/laptop.png'

const StyledOfferPage = styled.div`
  width: 100%;

  padding: 40px 5px;

  background-color: rgb(243, 186, 12);

  text-align: center;
  z-index: 100;
`

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
`

const OfferPage = () => (
  <StyledOfferPage>
    <H2>Offer</H2>
    <StyledImg src={search} />
    <H3>Develop Websites</H3>
    <p>
      Magna consectetur id ex velit ullamco reprehenderit id amet ut cillum. Exercitation
      consectetur nisi dolor voluptate eu do labore cupidatat ipsum voluptate occaecat adipisicing
      eu.
    </p>
    <StyledImg src={laptop} />
    <H3>Killing monsters</H3>
    <p>
      Magna consectetur id ex velit ullamco reprehenderit id amet ut cillum. Exercitation
      consectetur nisi dolor voluptate eu do labore cupidatat ipsum voluptate occaecat adipisicing
      eu.
    </p>
  </StyledOfferPage>
)

export default OfferPage

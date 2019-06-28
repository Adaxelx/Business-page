import React from 'react'
import styled from 'styled-components'

import H2 from '../components/headers/H2'

import search from '../images/search.png'
import laptop from '../images/laptop.png'

import OfferDiv from '../components/OfferDiv/OfferDiv'

const StyledOfferPage = styled.div`
  width: 100%;

  padding: ${({ theme }) => theme.padding};
  background-color: ${({ theme }) => theme.yellow};

  text-align: center;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 40px 60px;
  }

  @media ${({ theme }) => theme.device.laptop} {
    padding: 40px 200px;
  }
`

const StyledOfferWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.device.laptopL} {
    flex-direction: row;
  }
`

const OfferPage = () => {
  const offerList = [
    {
      key: 0,
      src: search,
      title: 'Develop websites',
      descr: 'Magna consectetur id ex velit ullamco reprehenderit id amet ut cillum. Exercitationconsectetur nisi dolor voluptate eu do labore cupidatat ipsum voluptate occaec',
    },
    {
      key: 1,
      src: laptop,
      title: 'Kiling monsters',
      descr: 'Magna consectetur id ex velit ullamco reprehenderit id amet ut cillum. Exercitationconsectetur nisi dolor voluptate eu do labore cupidatat ipsum voluptate occaec',
    },
  ]

  const offerArr = offerList.map(offer => <OfferDiv key={offer.key} src={offer.src} title={offer.title} descr={offer.descr} />)

  return (
    <StyledOfferPage>
      <H2>Offer</H2>
      <StyledOfferWrapper>{offerArr}</StyledOfferWrapper>
    </StyledOfferPage>
  )
}

export default OfferPage

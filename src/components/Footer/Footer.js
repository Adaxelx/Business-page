import React from 'react'
import styled from 'styled-components'
import H2 from '../headers/H2'
import device from '../../templates/MediaWidth'
import FooterSection from './FooterSection'

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.orange};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5%;
`

const StyledContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;

  @media ${device.mobileS} and (orientation: landscape), ${device.laptopL} and (orientation: portrait) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`

const Footer = () => {
  const data = [
    {
      key: 0,
      title: 'Skontaktuj się z nami!',
      content1: 'Haku@contact.pl',
      content2: '666 333 000',
    },
    {
      key: 1,
      title: 'Dołącz do nas!',
      content1: 'Haku@work.pl',
    },
    {
      key: 2,
      title: 'Zobacz nas na naszych mediach społecznościowych!',
      content1: 'facebook',
      content2: 'instagram',
    },
  ]
  const sections = data.map(sec => <FooterSection key={sec.key} title={sec.title} content1={sec.content1} content2={sec.content2} />)
  return (
    <StyledFooter>
      <H2>Więcej o nas!</H2>
      <StyledContent>{sections}</StyledContent>
    </StyledFooter>
  )
}

export default Footer

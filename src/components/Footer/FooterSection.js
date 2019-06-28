import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import device from '../../templates/MediaWidth'
import H3 from '../headers/H3'

const StyledSection = styled.section`
  margin-bottom: 30px;
  position: relative;
  @media ${device.mobileS} and (orientation: landscape),
    ${device.tablet} and (orientation: portrait) {
    max-width: 30%;
  }
`

const FooterSection = ({ title, content1, content2 }) => {
  return (
    <StyledSection>
      <H3>{title}</H3>
      <p>{content1}</p>
      <p>{content2}</p>
    </StyledSection>
  )
}

FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  content1: PropTypes.string.isRequired,
  content2: PropTypes.string,
}

FooterSection.defaultProps = {
  content2: null,
}

export default FooterSection

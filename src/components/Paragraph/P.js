import styled from 'styled-components'
import device from '../../templates/MediaWidth'

const P = styled.p`
  text-align: justify;
  font-size: ${({ theme }) => theme.fontSize.s};
  @media ${device.mobileS} and (orientation: landscape),
    ${device.tablet} and (orientation: portrait) {
    margin-left: 30px;
  }
`

export default P

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Logo from '../Logo'
import H3 from '../headers/H3'
import P from '../Paragraph/P'

const StyledOfferDiv = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.5s;
  ${({ active }) => (active ? 'transform: translateY(0%);' : 'transform: translateY(100%);')}
`

class OfferDiv extends React.Component {
  state = {
    active: false,
  }

  ref = React.createRef()

  componentDidMount() {
    setTimeout(this.handleScroll, 500)
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const scrollV = window.scrollY
    const { ref } = this
    if (ref.current !== undefined && ref.current !== null) {
      const off = ref.current.offsetTop
      const height = ref.current.offsetHeight
      if (off < scrollV + window.innerHeight - height / 4) {
        this.setState({
          active: true,
        })
      }
    }
  }

  render() {
    const { ref } = this
    const { active } = this.state
    const { src, title, descr } = this.props
    return (
      <StyledOfferDiv ref={ref} active={active}>
        <Logo src={src} />
        <H3>{title}</H3>
        <P>{descr}</P>
      </StyledOfferDiv>
    )
  }
}

OfferDiv.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string.isRequired,
  descr: PropTypes.string,
}

OfferDiv.defaultProps = {
  src: '',
  descr: '',
}

export default OfferDiv

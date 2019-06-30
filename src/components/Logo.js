import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledLogo = styled.img`
  width: 200px;
  transition: 0.5s;
  ${({ active }) => (active ? 'transform: scale(1)' : 'transform: scale(0.6)')}
`

class Logo extends React.Component {
  state = { active: false }

  ref = React.createRef()

  componentDidMount() {
    setTimeout(this.handleScroll, 500)
    setTimeout(() => window.addEventListener('scroll', this.handleScroll), 500)
  }

  componentWillUnmount() {
    setTimeout(() => window.removeEventListener('scroll', this.handleScroll), 500)
  }

  handleScroll = () => {
    const { ref } = this
    if (ref.current !== undefined && ref.current !== null) {
      const off = ref.current.getBoundingClientRect().top
      const height = ref.current.offsetHeight
      if (off < window.innerHeight - height / 2) {
        this.setState({
          active: true,
        })
      }
    }
  }

  render() {
    const { src } = this.props
    const { active } = this.state
    const { ref } = this
    return <StyledLogo ref={ref} active={active} src={src} alt={src} />
  }
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Logo

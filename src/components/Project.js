import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledProject = styled.section`
  width: 90%;
  margin-top: 30px;
  background-color: #f3ba0c;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.5s;
  ${({ active }) => (active ? 'transform: translateY(0%);' : 'transform: translateY(100%);')}
`

const StyledTitleProject = styled.h4`
  font-size: 2.5rem;
  margin: 10px 0 0 25px;
`

const StyledAuthor = styled.h3`
  font-size: 1.5rem;
  margin: 10px 25px 0 0;
  ${({ color }) => (color === 'Razem' ? 'color: blue' : 'color: yellow')}
`
const StyledTitle = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledImgProject = styled.img`
  width: 90%;
  margin-top: 10px;
`

const StyledContent = styled.p`
  width: 90%;
  margin-top: 10px;
  font-size: 1.3rem;
`

const StyledButton = styled.a`
  background-color: rgb(194, 194, 206);
  border: 1px solid black;
  margin: 10px 0 10px 0;
  width: 50px;
  height: 50px;
`

class Project extends React.Component {
  state = { active: false }

  ref = React.createRef()

  componentDidMount() {
    setTimeout(this.handleScroll, 500)
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const scrollV = window.scrollY
    const { ref } = this
    const off = ref.current.offsetTop
    const height = ref.current.offsetHeight
    if (off < scrollV + window.innerHeight - height / 4) {
      this.setState({
        active: true,
      })
    }
  }

  render() {
    const { title, author, img, content, link } = this.props
    const { ref } = this
    const { active } = this.state
    return (
      <StyledProject ref={ref} active={active}>
        <StyledTitle>
          <StyledTitleProject>{title}</StyledTitleProject>
          <StyledAuthor color={author}>{author}</StyledAuthor>
        </StyledTitle>
        <StyledImgProject src={img} alt="windows" />
        <StyledContent>{content}</StyledContent>
        <StyledButton target="_blank" href={link} />
      </StyledProject>
    )
  }
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Project

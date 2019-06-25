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
`

const StyledTitleProject = styled.h4`
  font-size: 2.5rem;
  margin: 10px 0 0 25px;
`

const StyledAuthor = styled.h3`
  font-size: 1.5rem;
  margin: 10px 25px 0 0;
  ${({ color }) => (color === 'T' ? 'color: blue' : 'color: yellow')}
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

const Project = ({ title, author, img, content, link }) => {
  return (
    <StyledProject>
      <StyledTitle>
        <StyledTitleProject>{title}</StyledTitleProject>
        <StyledAuthor color="T">{author}</StyledAuthor>
      </StyledTitle>
      <StyledImgProject src={img} alt="windows" />
      <StyledContent>{content}</StyledContent>
      <StyledButton target="_blank" href={link} />
    </StyledProject>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Project

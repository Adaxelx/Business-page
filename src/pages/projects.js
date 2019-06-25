import React from 'react'
import styled from 'styled-components'
import H2 from '../components/headers/H2'
import Layout from '../components/layout'

import img from '../images/projects2.png'

/* zółty #f3ba0c */

const StyledProjects = styled.article`
  margin-top: 40px;
  background-color: rgb(194, 194, 206);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const StyledDescription = styled.p`
  margin-top: 30px;
  width: 90%;
`

const StyledImg = styled.img`
  width: 200px;
  margin-top: 30px;
`

const StyledProject = styled.section`
  height: 300px;
  width: 90%;
  margin-top: 30px;
  background-color: #f3ba0c;
`

const StyledTitleProject = styled.h4`
  font-size: 2.5rem;
  margin: 10px 0 0 25px;
`

const StyledAuthor = styled.h3`
  font-size: 1.5rem;
  margin: 10px 25px 0 0;
`
const StyledTitle = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Projects = () => {
  return (
    <Layout>
      <StyledProjects>
        <H2>Nasze projekty</H2>
        <StyledImg src={img} alt="" />
        <StyledDescription>
          Jest to zbiór naszych wspólnych jak i samodzielnych projektów. Przedstawione tutaj
          projekty nie są wszystkimi projektami naszej firmy jak i jej pracowników, jednak
          postaraliśmy się wybrać te najbardziej interesujące.
        </StyledDescription>
        <StyledProject>
          <StyledTitle>
            <StyledTitleProject>Windows</StyledTitleProject>
            <StyledAuthor>Razem</StyledAuthor>
          </StyledTitle>
        </StyledProject>
      </StyledProjects>
    </Layout>
  )
}

export default Projects

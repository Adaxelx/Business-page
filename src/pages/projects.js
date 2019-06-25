import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import H2 from '../components/headers/H2'
import Layout from '../components/layout'

const StyledProjects = styled.article`
  margin-top: 40px;
  background-color: #e09100;
  height: 100vh;
  width: 100%;
`

const Projects = () => {
  return (
    <Layout>
      <StyledProjects>
        <H2>Nasze projekty</H2>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </StyledProjects>
    </Layout>
  )
}

export default Projects

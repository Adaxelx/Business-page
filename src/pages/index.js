import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledButton = styled.button`
  height: 100px;
  width: 40px;
  background-color: cadetblue;
`

const IndexPage = () => (
  <>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StyledButton>123</StyledButton>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage

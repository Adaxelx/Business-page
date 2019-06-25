import React from 'react'
import styled from 'styled-components'

import H2 from '../components/headers/H2'

const StyledContactPage = styled.div`
  width: 100%;

  padding: 40px 15px;

  background-color: #f3ba0c;

  text-align: center;
`

const StyledInput = styled.input`
  background-color: white;
  width: 250px;
  height: 40px;
  border: none;
  text-align: center;
  padding: 2px;
  margin-bottom: 15px;
  font-size: 1.75rem;
  /* border: black solid 2px; */
  border-radius: 50px;
`

const StyledTextArea = styled.textarea`
  background-color: white;
  width: 250px;
  height: 250px;
  border: none;
  text-align: center;
  padding: 12px;
  margin-bottom: 15px;
  font-size: 1.75rem;
  /* border: black solid 2px; */
  border-radius: 50px;
`

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #e09100;
  text-align: center;
  padding: 2px;
  font-size: 1.75rem;
  /* border: black solid 2px; */
  border: none;
  border-radius: 50px;
`

const ContactPage = () => (
  <>
    <StyledContactPage>
      <H2>Contact</H2>
      <StyledInput type="text" placeholder="Nick" />
      <StyledInput type="email" placeholder="E-mail" />
      <StyledTextArea type="text" placeholder="Your message" />
      <StyledButton>Send</StyledButton>
    </StyledContactPage>
  </>
)

export default ContactPage

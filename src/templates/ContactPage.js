import React from 'react'
import styled from 'styled-components'

import H2 from '../components/headers/H2'

const StyledContactPage = styled.div`
  width: 100%;

  padding: 20px;

  background-color: ${({ theme }) => theme.yellow};

  text-align: center;
`

const StyledForm = styled.form`
  width: 250px;
  font-size: ${({ theme }) => theme.fontSize.m};
  display: flex;
  flex-direction: column;
  align-items: center;

   /* @media ${({ theme }) => theme.device.moblieS} {
         background-color: #000;
    width: 250px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media ${({ theme }) => theme.device.moblieM} {
    background-color: #fff;
    font-size: ${({ theme }) => theme.fontSize.m};
  } */


  @media (min-width: 460px) {
    width: 350px;
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 550px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`

const StyledInput = styled.input`
  background-color: white;
  width: 100%;
  border: none;
  text-align: center;
  padding: 2px;
  margin-bottom: 15px;
  /* border: black solid 2px; */
  border-radius: 50px;

  @media ${({ theme }) => theme.device.moblieS} {
    height: 40px;
  }

  @media ${({ theme }) => theme.device.moblieM} {
    height: 50px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    /* height: 60px; */
  }
`

const StyledTextArea = styled.textarea`
  background-color: white;
  width: 100%;
  height: 250px;
  border: none;
  text-align: center;
  padding: 12px;
  margin-bottom: 15px;
  /* border: black solid 2px; */
  border-radius: 50px;

  @media ${({ theme }) => theme.device.moblieM} {
    width: 100%;
  }
`

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${({ theme }) => theme.orange};
  text-align: center;
  padding: 2px;
  font-size: ${({ theme }) => theme.fontSize.m};
  /* border: black solid 2px; */
  border: none;
  border-radius: 50px;

  @media ${({ theme }) => theme.device.moblieM} {
    width: 150px;
    height: 50px;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`

const StyledMap = styled.iframe`
  height: 300px;
  width: 100%;
  margin-top: 15px;

  @media ${({ theme }) => theme.device.tablet} {
    width: 60%;
    height: 400px;
  }
  @media ${({ theme }) => theme.device.laptop} {
    height: 450px;
    margin-top: 0;
    margin-right: 10px;
    margin-left: 20px;
  }
`

const StyledContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.device.laptop} {
    flex-direction: row;
  }
`

const ContactPage = () => (
  <>
    <StyledContactPage>
      <H2>Contact</H2>
      <StyledContactWrapper>
        <StyledForm>
          <StyledInput type="text" placeholder="Nick" />
          <StyledInput type="email" placeholder="E-mail" />
          <StyledTextArea type="text" placeholder="Your message" />
          <StyledButton>Send</StyledButton>
        </StyledForm>
        <StyledMap
          title="This is a unique title"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7790.701962398872!2d23.131991354695444!3d52.04481884891013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1561617451488!5m2!1spl!2spl"
          frameBorder="0"
          allowFullScreen
        />
      </StyledContactWrapper>
    </StyledContactPage>
  </>
)

export default ContactPage

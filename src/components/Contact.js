import React from 'react';
import styled from 'styled-components';
import { SectionContainer } from './Commons';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const InputBase = styled.input`
  width: 100%;
  background-color: #FBFBFB;
  cursor: text;
  padding: 6px 10px 6px 10px;
  border: 1px solid #E7E7E7;
  border-radius: 3px;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
  box-shadow: none;
  background-image:none;
  color: ${props => props.theme.contentColor};
  &::placeholder {
    color: #CCCCCC;
  }
  margin-bottom: 20px;
`;

const Message = styled.textarea`
  width: 100%;
  background-color: #FBFBFB;
  cursor: text;
  padding: 6px 10px 6px 10px;
  border: 1px solid #E7E7E7;
  border-radius: 3px;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
  box-shadow: none;
  resize: none;
  height: 300px;
  &::placeholder {
    color: #CCCCCC;
  }
  margin-bottom: 20px;
`;

const Button = styled.input`
  background-color: white;
  box-shadow: none;
  border: none;
  padding: 6px 10px;
  font-size: 18px;
  border-radius: 3px;
  color: ${props => props.theme.buttonColor};
  cursor: pointer;
  border: 2px solid ${props => props.theme.buttonColor};
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${props => props.theme.buttonColor};
    color: white;
  }
`;

function Contact () {
  return (
    <SectionContainer
      isWhite
    >
      <Container>
        <h2 style={{ textAlign: 'center' }}>Contact</h2>
        <form form action="mailto:hanyutseng.hyt@gmail.com" method="post" enctype="text/plain">
          <InputBase
            type="text"
            placeholder="Your Name"
            name="name"
          />
          <InputBase
            type="email"
            placeholder="Your Email"
            name="mail"
          />
          <Message
            placeholder="Your Message"
            name="message"
          />
          <Button type="submit" value="Submit" />
        </form>
      </Container>
    </SectionContainer>
  );
}

export default Contact;

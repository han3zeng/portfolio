import Modal from './Modal';
import styled, { keyframes } from 'styled-components';
import React from 'react';

const fadeOut = keyframes`
  0%{
    opacity: 1;
    transform: scale(1);
  }
  90%  {
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
`;


const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  10% {
    transform: scale(1);
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Container = styled.div`
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 2;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(51, 51, 51, 0.8);
  transform: scale(0);
  transition: opacity 0.2s ease-in-out;
  animation: 0.3s ${props => {
    if (props.ifOpen === true) {
      return fadeIn;
    } else if (props.ifOpen === false) {
      return fadeOut;
    } else {
      return null;
    }
  }}; ease-out;
  animation-fill-mode: forwards;
`;


function WorkPopup (props) {
  const { content, hidePopup, ifShowPopup } = props;
  return (
    <Modal>
      <Container
        ifOpen={ifShowPopup}
        onClick={hidePopup}
      >
        {content}
      </Container>
    </Modal>
  );
}

export default WorkPopup;

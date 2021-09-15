import React from 'react';
import loadingIcon from '../assets/loading.svg';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0%{
    transform: rotate(0);
  }
  50%  {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

const Container = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(180, 180, 180, 0.8);
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  > img {
    width: 70px;
    height: 70px;
    animation-name: ${rotate};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

function Loading () {
  return (
    <Container>
      <ContentWrapper>
        <img src={loadingIcon} alt="loading" />
      </ContentWrapper>
    </Container>
  );
}

export default Loading;

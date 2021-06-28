import React, { Fragment } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  background: white;
  box-sizing: border-box;
`;

const NewsOutlet = styled.div`
  font-size: 10px;
  font-weight: 700;
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: black;
  margin: 10px 0;
`

const Title = styled.div`
  font-size: 8px;
`

const Content = styled.div`
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 33%;
  box-sizing: border-box;
  padding: 0 6px;
`

const Line = styled.div`
  width: 100%;
  height: 2px;
  background: black;
`

const Img = styled.div`
  border: 2px solid black;
  flex: 1 1 33%;
`;

function Text() {
  const Lines = (() => {
    const tmp = [];
    for (let i = 0 ; i < 6 ; i++) {
      tmp.push(<Line />)
    }
    return tmp;
  })();

  return (
    <LineContainer>
      {Lines}
    </LineContainer>
  );
}

function NewsPaper ({
  title = 'test',
}) {
  return (
    <Container>
      <NewsOutlet>Xizhi Times</NewsOutlet>
      <Divider />
      <Title>{title}</Title>
      <Content>
        <Text></Text>
        <Text></Text>
        <Img></Img>
      </Content>
    </Container>
  )
}




export default NewsPaper;

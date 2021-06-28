import { worksContent } from '../editor/text';
import styled from 'styled-components';
import config from '../config';
const { breakpoints } = config;

const Container = styled.div`
  margin-top: ${props => props.theme.sectionMargin};
  padding: 0 ${props => props.theme.pageMargin};
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 10px;
  @media (min-width: ${breakpoints.minTablet}px) {
    grid-template-columns: auto auto;

  }
  @media (min-width: ${breakpoints.minDesktop}px) {
    grid-template-columns: auto auto auto;

  }
`

const WorkContainer = styled.div`
  height: 300px;
  background-color: #F7F7F7;
  background-image: url("${props => props.thumbnail}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`


const Mask = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity .3s ease-in-out;
  background-color: white;
  position: relative;
  &:hover {
    opacity: 1;
  }
`

const TitleStack = styled.div`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 0;
  opacity: 0;
  transition: all .3s ease-in-out;
  transform: translate(-50%, 0);
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  ${Mask}:hover & {
    opacity: 1;
    transform: translate(-50%, 50px);
  }
  &: after {
    position: absolute;
    top: 103%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
    content: '${props => props.skillStack}';
    color: #2E7265;
    font-weight: 400;
  }
`;

const LearnMore = styled.div`
  cursor: pointer;
  border: 2px solid ${props => props.theme.buttonColor};
  padding: 5px;
  font-size: 20px;
  font-weight: 500;
  box-sizing: border-box;
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  transition: all .3s ease-in-out;
  color: ${props => props.theme.captionColor};
  &: hover {
    color: white;
    background-color: ${props => props.theme.buttonColor};
  }
  ${Mask}:hover & {
    opacity: 1;
    transform: translate(-50%, -60px);
  }
`;


function Works () {
  const Contents =  worksContent.map((entity, index) => {
    const { thumbnail, title, skillStack } = entity;
    return (
      <WorkContainer
        thumbnail={thumbnail}
      >
        <Mask>
          <TitleStack
            skillStack={skillStack}
          >
            {title}
          </TitleStack>
          <LearnMore>Learn More</LearnMore>
        </Mask>
      </WorkContainer>
    );
  })

  return (
    <Container>
      <h2 style={{ textAlign: 'center' }}>Works</h2>
      <ContentWrapper>
        {Contents}
      </ContentWrapper>
    </Container>
  )
}

export default Works;

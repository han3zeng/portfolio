import React, { PureComponent } from 'react';
import styled from 'styled-components';
import InnerStickySection from './InnerStickySection';
import { landingContent } from '../editor/text';
import config from '../config';
import { SectionContainer } from './Commons';

const { title, contents } = landingContent;
const { breakpoints } = config;

const Container = styled.div`
  box-sizing: border-box;
`;

const TitleWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  @media(max-width: ${breakpoints.maxTablet}px) {
    padding: 0 20px;
  }
`

const ContentSection = styled.div`
  height: 100vh;
  position: relative;
  font-size: 18px;
  text-align: left;
  > p {
    background: #E9E9E9;
    position: absolute;
    box-sizing: border-box;
    top: 50%;
    left: 50%;
    padding: 16px;
    transform: translate(-50%, -50%);
    max-width: 480px;
    @media(max-width: ${breakpoints.maxTablet}px) {
      width: 90%;
    }
  }
`;

function createMarkup(content: string) {
  return {__html: `${content}`};
}

class Landing extends PureComponent {
  constructor(props: Props) {
    super(props);
    this.contentSections = [];
  }

  componentDidMount() {
    if (this.contentSections.length !== 0) {
      this.contentSections.forEach((node, index) => {
        if (node && window && document) {
          node.style.height = window.innerHeight || document.documentElement.clientHeight;
        }
      });
    }
  }

  _renderContent() {
    return contents.map((content, index) => {
      return (
        <ContentSection
          key={`landing-content-${index}`}
          ref={node => {
            if (node) {
              this.contentSections.push(node);
            }
          }}
        >
          <p
            dangerouslySetInnerHTML={createMarkup(content)}
          />
        </ContentSection>
      );
    });
  }

  render() {
    return (
      <SectionContainer
        witoutPadding
        isWhite
        id="home"
      >
        <Container
          id="Landing"
        >
          <TitleWrapper>
            <Title dangerouslySetInnerHTML={createMarkup(title)} />
          </TitleWrapper>
          <InnerStickySection>
          </InnerStickySection>
          {/*<LandingTitle dangerouslySetInnerHTML={createMarkup(title)} />*/}
          <div>
            {this._renderContent()}
          </div>
        </Container>
      </SectionContainer>
    );
  }
}

export default Landing;

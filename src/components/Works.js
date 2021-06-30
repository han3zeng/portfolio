import React from 'react';
import styled from 'styled-components';
import Popup from './Popup';
import WorkPopupContent from './WorkPopupContent';
import { worksContent } from '../editor/text';
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
  background-size: ${props => props.backgroundSize || 'contain'};
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
    top: 120%;
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

const PopupContentWrapper = styled.div`
  width: 600px;
  height: 90%;
  background-color: white;
  z-index: ${props => props.ifOpen ? '1' : '0'};
  position: relative;
`;


class Works extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ifShowPopup: null,
      popupContent: {},
    }
    this.showPopup = this._showPopup.bind(this);
    this.hidePopup = this._hidePopup.bind(this);
  }

  _showPopup(popupContent) {
    if (document) {
      document.body.style.overflow = 'hidden';
    }
    this.setState({
      ifShowPopup: true,
      popupContent,
    })
  }

  _hidePopup() {
    if (document) {
      document.body.style.overflow = 'scroll';
    }
    this.setState({
      ifShowPopup: false,
      popupContent: {},
    })
  }

  _renderPopop() {
    const { ifShowPopup, popupContent } = this.state
    // if (!ifShowPopup) {
    //   return null;
    // }
    const {
      title,
      subTitle,
      imgUrls,
      introduction,
      href
    } = popupContent
    const content = (
      <WorkPopupContent
        hidePopup={this.hidePopup}
        title={title}
        subTitle={subTitle}
        imgUrls={imgUrls}
        introduction={introduction}
        href={href}
      />
    );
    return (
      <Popup
        content={content}
        hidePopup={this.hidePopup}
        ifShowPopup={ifShowPopup}
      />
    );
  }

  render() {
    const Contents =  worksContent.map((entity, index) => {
      const { thumbnail, title, skillStack, imgUrls, subTitle, introduction, href, backgroundSize  } = entity;
      return (
        <WorkContainer
          thumbnail={thumbnail}
          backgroundSize={backgroundSize}
        >
          <Mask>
            <TitleStack
              skillStack={skillStack}
            >
              {title}
            </TitleStack>
            <LearnMore
              onClick={() => {
                this.showPopup({
                  title,
                  subTitle,
                  imgUrls,
                  introduction,
                  href,
                  backgroundSize
                })
              }}
            >Learn More</LearnMore>
          </Mask>
        </WorkContainer>
      );
    });
    return (
      <Container>
        <h2 style={{ textAlign: 'center' }}>Works</h2>
        <ContentWrapper>
          {Contents}
        </ContentWrapper>
        {this._renderPopop()}
      </Container>
    );
  }
}

export default Works;

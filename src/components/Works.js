import React from 'react';
import styled from 'styled-components';
import Popup from './Popup';
import WorkPopupContent from './WorkPopupContent';
import { SectionContainer } from './Commons';
import { worksContent, sideProjectsContent } from '../editor/text';
import config from '../config';
const { breakpoints, tags: tagsPrototye } = config;


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
  background-color: white;
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
  background-color: #F7F7F7;
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
    color: ${props => props.theme.tagColor};
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

const TagContainer = styled.div`
  margin-bottom: 20px;
`

const Tag = styled.div`
  color: ${props => props.theme.tagColor};
  cursor: pointer;
  border: 2px solid ${props => props.theme.tagColor};
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  font-weight: 500;
  box-sizing: border-box;
  display: inline-block;
  margin-right: 10px;
  transition: box-shadow .3s ease-in-out;
  color: ${props => props.highlight ? 'white' : props.theme.tagColor};
  background-color: ${props => props.highlight ? props.theme.tagColor : 'transparent' };
  &: hover {
    box-shadow: 1px 2px 2px gray;
  }
  margin-bottom: 10px;
`


class Works extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ifShowPopup: null,
      tags: [],
      popupContent: {},
    }
    this.showPopup = this._showPopup.bind(this);
    this.hidePopup = this._hidePopup.bind(this);
    this.onClickTag = this._onClickTag.bind(this);
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

  _onClickTag(target) {
    console.log('target: ', target)
    this.setState((state, props) => {
      const { tags } = state;
      let result;
      if (tags.indexOf(target) === -1) {
        result = [...tags, target];
      } else {
        result = tags.filter(tag => tag !== target)
      }
      return {
        tags: result,
      }
    })
  }

  _renderTags() {
    const tagList = Object.keys(tagsPrototye);
    const { tags } = this.state;
    return tagList.map((tag) => {
      return (
        <Tag
          key={tagsPrototye[tag]}
          highlight={tags.indexOf(tagsPrototye[tag]) !== -1}
          onClick={() => {
            this._onClickTag(tagsPrototye[tag]);
          }}
        >
          {tagsPrototye[tag]}
        </Tag>
      );
    });
  }

  _renderContent(list) {
    const { tags } = this.state;
    return list.map((entity, index) => {
      const { thumbnail, title, skillStack, imgUrls, subTitle, introduction, href, backgroundSize, id, tagSet  } = entity;
      if (tags.some((element) => tagSet.has(element)) || tags.length === 0) {
        return (
          <WorkContainer
            thumbnail={thumbnail}
            backgroundSize={backgroundSize}
            key={id}
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
      } else {
        return null;
      }
    });
  }

  render() {
    return (
      <SectionContainer
        id="portfolio"
      >
        <h2 style={{ textAlign: 'center' }}>Portfolio</h2>
        <TagContainer>
          {this._renderTags()}
        </TagContainer>
        <ContentWrapper>
          {this._renderContent(worksContent)}
        </ContentWrapper>
        {this._renderPopop()}
      </SectionContainer>
    );
  }
}

export default Works;

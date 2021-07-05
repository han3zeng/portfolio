import styled, { keyframes } from 'styled-components';
import openInNew from '../assets/open-in-new.svg';


const jumping = keyframes`
  0%{
    transform: translateY(0);
  }
  50%  {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
`;

const PopupContentWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  height: 90%;
  max-height: 650px;
  background-color: white;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  &:: -webkit-scrollbar  {
    display: none;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 5px;
`

const Subtitle = styled.div`
  color: ${props => props.theme.captionColor};
  font-size: 18px;
  padding-reight: 10px;
  box-sizing: border-box;
`;


const CrossWrapper = styled.div`
  height: 20px;
  width: 20px;
  position: relative;
  cursor: pointer;
`

const CrossRight = styled.div`
  position: absolute;
  width: 20px;
  height: 2px;
  top: 50%;
  left: 50%;
  background-color: black;
  transform: translate(-50%, -50%) rotate(-45deg);
  border-radius: 1px;
  transition: all 0.3s ease-in-out;
  ${CrossWrapper}:hover & {
    transform: translate(-50%, -50%) rotate(-225deg);
  }
`;

const CrossLeft = styled(CrossRight)`
  transform: translate(-50%, -50%) rotate(45deg);
  ${CrossWrapper}:hover & {
    transform: translate(-50%, -50%) rotate(225deg);
  }
`

const ImgWrapper = styled.div`
  width: 100%;
  height: 55%;
  > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  margin-bottom: 24px;
`;

const Divider = styled.div`
  background-color: #CCCCCC;
  margin: 23px 0;
  width: 100%;
  height: 1px;
`;

const Close = styled.div`
  background-color: #E9E9E9;
  font-size: 20px;
  color: #666666;
  padding: 5px 8px;
  border-radius: 3px;
  cursor: pointer;
`;

const Button = styled.div`
  background-color: ${props => props.theme.buttonColor};
  color: white;
  font-size: 20px;
  font-size: 18px;
  padding: 5px 8px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    margin-right: 2px;
    display: inline-block;
  }
  &:hover {
    span {
      animation-name: ${jumping};
      animation-duration: 0.3s;
      animation-timing-function: ease-in-out;
    }
    span:nth-child(1) {
      animation-delay: 0.1s;

    }
    span:nth-child(2) {
      animation-delay: 0.2s;
    }
    span:nth-child(3) {
      animation-delay: 0.3s;
    }
    span:nth-child(4) {
      animation-delay: 0.4s;
    }
    span:nth-child(5) {
      animation-delay: 0.5s;
    }
  }
`;

function WorkPopupContent({
  title,
  subTitle,
  imgUrls,
  introduction,
  hidePopup,
  href
}) {
  return (
    <PopupContentWrapper
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Row>
        <div>
          <Title>{title}</Title>
          <Subtitle>{subTitle}</Subtitle>
        </div>
        <CrossWrapper
          onClick={hidePopup}
        >
          <CrossRight />
          <CrossLeft />
        </CrossWrapper>
      </Row>
      <Divider />
      <ImgWrapper>
        <img src={imgUrls && imgUrls[0]} />
      </ImgWrapper>
      <p>{introduction}</p>
      <Divider />
      <Row>
        <Close onClick={hidePopup}>Close</Close>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <div>
              <span>V</span>
              <span>i</span>
              <span>s</span>
              <span>i</span>
              <span>t</span>
            </div>
            <img src={openInNew} />
          </Button>
        </a>
      </Row>
    </PopupContentWrapper>
  );
}

export default WorkPopupContent;

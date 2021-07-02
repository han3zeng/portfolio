import styled from 'styled-components';
import { SectionContainer } from './Commons';
import linkedInLogo from '../assets/linkedin-logo.svg';
import githubLogo from '../assets/github-logo.svg';

const Container = styled.footer`
  margin: 0 auto;
  max-width: 600px;
  padding-top: 25px;
  display: flex;
  align-content: center;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  img {
    height: 30px;
    width: 30px;
  }
  a:not(:last-child) {
    margin-right: 15px;
  }
  a {
    cursor: pointer;
  }
`;

function Footer () {
  return (
    <SectionContainer
      isWhite
      withBorder
    >
      <Container>
        <Row>
          <a
            href="https://www.linkedin.com/in/han-yu-tseng-hyt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInLogo} alt="linkedIn logo, click it to open new tab" />
          </a>
          <a
            href="https://github.com/han3zeng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="github logo, click it to open new tab" />
          </a>
        </Row>
        <div style={{ textAlign: 'center', marginTop: '15px' }} >
          <small>Han3Zeng © 2021</small>
        </div>
      </Container>
    </SectionContainer>
  );
}

export default Footer;

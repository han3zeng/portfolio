import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import Works from './components/Works';
import Contact from './components/Contact';
import config from './config';
const { breakpoints } = config

const theme = {
  buttonColor: '#326891',
  sectionMargin: '68px',
  pageMargin: '20px;',
  headerColor: '#121212',
  contentColor: '#333333',
  captionColor: '#666666',
  fontFamily: 'georgia,"times new roman", times, serif',
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${props => props.theme.fontFamily};
  }

  p {
    font-size: 16px;
    line-height: 130%;
    color: ${props => props.theme.contentColor};
  }

  h1 {
    color: ${props => props.theme.headerColor};
    font-size: 48px;
    line-height: 130%;
    @media(max-width: ${breakpoints.maxTablet}px) {
      font-size: 36px;
    }
  }

  h2 {
    color: ${props => props.theme.headerColor};
    font-size: 36px;
    line-height: 130%;
    @media(max-width: ${breakpoints.maxTablet}px) {
      font-size: 28px;
    }
  }

  h3 {
    color: ${props => props.theme.headerColor};
    font-size: 28px;
    line-height: 130%;
    @media(max-width: ${breakpoints.maxTablet}px) {
      font-size: 24px;
    }
  }

  a {
    text-decoration: none;
  }

  input, textarea, button {font-family: inherit}
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  position: relative;
  z-index: 1;
`

const ContentWrapper = styled.div`
  position: relative;
`

function App() {
  return (
    <ThemeProvider
      theme={theme}
    >
      <Container>
        <Landing />
        <ContentWrapper>
          <Navigation />
          <Works />
          <Contact />
        </ContentWrapper>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { worksContent, sideProjectsContent } from './editor/text';
import config from './config';
const { breakpoints } = config

const theme = {
  tagColor: '#2E7265',
  buttonColor: '#326891',
  sectionMargin: '68px',
  pageMargin: '20px;',
  headerColor: '#121212',
  contentColor: '#333333',
  captionColor: '#666666',
  fontFamily: 'georgia,"times new roman", times, serif',
};

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

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
    font-size: 44px;
    line-height: 130%;
    @media(max-width: ${breakpoints.maxTablet}px) {
      font-size: 30px;
    }
    margin-bottom: 2em;
  }

  h3 {
    color: ${props => props.theme.headerColor};
    font-size: 32px;
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


const ContentWrapper = styled.div`
  position: relative;
`

function App() {
  return (
    <ThemeProvider
      theme={theme}
    >
      <Landing />
      <ContentWrapper>
        <Navigation />
        <Works
          title={'Works'}
          isWhite={false}
          list={worksContent}
        />
        <Contact />
        <Footer />
      </ContentWrapper>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

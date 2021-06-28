import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Landing from './components/Landing';
import config from './config';
const { breakpoints } = config

const theme = {
  headerColor: '#121212',
  contentColor: '#33333',
  caption: '#66666',
  fontFamily: 'georgia,"times new roman", times, serif',
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${props => props.theme.fontFamily};
  }

  p {
    font-size: 20px;
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
`;

function App() {
  return (
    <ThemeProvider
      theme={theme}
    >
      <Landing />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

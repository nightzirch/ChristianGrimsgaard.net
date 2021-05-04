import { AppProps } from 'next/app';
import Head from 'next/head';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { appTheme } from '../styles/appTheme';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${appTheme.color.black};
    margin: 0;
    padding: 0;
    font-family: amatic-sc, sans-serif;
    font-weight: 700;
    font-style: normal;
  }
`;

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  min-height: 100vh;
  overflow: hidden;
`;

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ThemeProvider theme={appTheme}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Christian Grimsgaard</title>
    </Head>

    <GlobalStyle />

    <StyledApp>
      <Component {...pageProps} />
    </StyledApp>
  </ThemeProvider>
);

export default App;

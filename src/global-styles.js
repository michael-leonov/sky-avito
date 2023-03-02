import styled, { createGlobalStyle } from 'styled-components';
import RobotoRegular from './assets/fonts/Roboto-Regular.ttf';
import RobotoMedium from './assets/fonts/Roboto-Medium.ttf';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
    ::before,::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  }


  @font-face {
    font-family: 'Roboto-Regular';
    src: url(${RobotoRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto-Medium';
    src: url(${RobotoMedium}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  html {
    font-family: 'Roboto-Regular';
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }
  
  body {
    position: relative;
  }

  h1 {
    font-family: 'Roboto-Medium';
    font-size: 40px;
  }
`;

export const StyledContainer = styled.div`
  width: 1160px;
  margin: 0 auto;
`;

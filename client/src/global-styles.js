import styled, { createGlobalStyle } from 'styled-components';
import RobotoRegular from './assets/fonts/Roboto-Regular.ttf';
import RobotoMedium from './assets/fonts/Roboto-Medium.ttf';
import NotoSansRegular from './assets/fonts/NotoSans-Regular.ttf';
import NotoSansSemiBold from './assets/fonts/NotoSans-SemiBold.ttf';
import NotoSansBoldr from './assets/fonts/NotoSans-Bold.ttf';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.5;
  
    ::before,::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  
  @font-face {
    font-family: 'NotoSans';
    src: url(${NotoSansRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'NotoSans';
    src: url(${NotoSansSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'NotoSans';
    src: url(${NotoSansBoldr}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  html {
    font-family: 'Roboto';
    font-weight: 400;
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: #009EE4;
    transition: color 0.2s ease-in;
    
    :hover {
      color: #0080c1;
    }
  }

  button {
    font-family: 'Roboto';
    font-weight: 400;
  }

  input, textarea {
    outline: 1px solid rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 6px;
    font-family: 'Roboto';
    font-weight: 400;

    :focus {
      outline: 1px solid #009EE4;
    }

    ::placeholder {
      color: rgba(0, 0, 0, 0.3);
      font-size: 16px;
    }
  }
  
  body {
    position: relative;
  }

  h1 {
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 40px;
    margin-bottom: 10px;
    line-height: 2;
  }

  h2 {
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 2;
  }
`;

export const StyledContainer = styled.div`
  width: 1160px;
  margin: 0 auto;
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  ::-webkit-scrollbar {
    width: 12px;
    background:#20232a;
  }

  ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 10px;
      border-radius: 10px;
      background: rgba(97, 218, 251, .2);
  }
  body {
    background: #f3f2ef;
    color: #434343;
    -webkit-font-smoothing: antialiased;

  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h5, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;

import { shade } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
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
    font: 16px Roboto, sans-serif;
  }

  h1,h2,h3,h4,h5,h5, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  .logo {
    a {
      display: block;
      font-size: 25px;
      font-weight: 500;
      color: #8e72dc;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, '#8e72dc')};
      }
    }
  }
`;

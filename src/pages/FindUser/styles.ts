import { shade } from 'polished';
import styled, { css } from 'styled-components';

import githubBackground from '../../assets/github.svg';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background: #f0f0f5 url(${githubBackground}) no-repeat 70% top;

  main {
    flex: 1;
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;

    > h1 {
      font-size: 48px;
      color: #3a3a3a;
      max-width: 450px;
      line-height: 56px;
      font-weight: 600;

      margin-top: 80px;
    }
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8b8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #8e72dc;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#8e72dc')};
    }
  }
`;

export const Error = styled.span``;

export const Users = styled.section`
  margin-top: 80px;
  max-width: 700px;
`;

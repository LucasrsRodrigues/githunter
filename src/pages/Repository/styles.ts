import styled from 'styled-components';
import githubBackground from '../../assets/github.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background: #f0f0f5 url(${githubBackground}) no-repeat 70% top;

  main {
    flex: 1;
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;

    .header {
      display: flex;
      align-items: center;

      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;

        transition: color 0.2s;

        &:hover {
          color: #666;
        }

        svg {
          margin-right: 4px;
        }
      }
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 25px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 15px;
    }

    &:hover {
      transform: translate(10px);
      border-left: 8px solid #8e72dc;
    }

    div {
      margin: 0 16px;
      flex: 1;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #c9c9d4;
    }
  }
`;

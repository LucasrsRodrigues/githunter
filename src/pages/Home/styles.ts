import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  main {
    height: calc(100% - 134px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 300px;
    }
    h1 {
      font-size: 50px;
    }
    .wrapper-content {
      margin-top: 15px;
      p {
        text-align: center;
        span {
          color: #8e72dc;
          font-weight: 500;
        }
      }
    }
  }

  @media (max-width: 992px) {
    main {
      h1 {
        font-size: 25px;
      }

      p {
        font-size: 15px;
      }
    }
  }
`;

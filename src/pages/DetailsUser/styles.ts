import styled from 'styled-components';

export const Container = styled.div`
  main {
    margin-top: 35px;
    display: flex;
    padding: 0 50px;

    aside {
      width: 100%;
      max-width: 400px;

      .user {
        img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
        }

        h2 {
          font-weight: 700;
          margin-top: 15px;
          color: #8e72dc;
        }

        span {
          font-weight: 300;
          color: #ff3961;
        }

        .bio {
          max-width: 200px;
          margin-top: 15px;
        }
      }
    }
  }

  @media (max-width: 992px) {
    main {
      flex-direction: column;

      aside {
        .user {
          > div {
            display: flex;
            align-items: center;
            div {
              margin-left: 15px;

              h2 {
                font-size: 15px;
              }
              span {
                font-size: 12px;
              }
            }
          }
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
        }
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 800px;

  section {
    h1 {
      margin: 30px 0;
    }

    &.projects {
      width: 100%;
    }
    .wrapper-projects {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 10px;
      grid-row-gap: 10px;
    }
  }

  @media (max-width: 992px) {
    section {
      .statistic {
        a {
          width: 300px;
        }
      }
    }
  }
`;

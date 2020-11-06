import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;

  > div.wrapper {
    width: 80%;
  }
`;

export const Panel = styled.div`
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);

  .bg-skeleton {
    width: 100%;
    height: 70px;

    filter: brightness(96%);
  }
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 175px;

    .avatar-skeleton {
      z-index: 1;
      width: 72px;
      height: 72px;
      border-radius: 50%;
      margin: -36px 0 10px;
    }

    .row-skeleton {
      height: 12px;

      &:nth-child(2) {
        width: 60%;
      }
      &:nth-child(3) {
        width: 50%;
        margin-top: 10px;
      }
    }
  }
  &.no-shadow {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 2px 3px rgba(0, 0, 0, 0.05);
  }
`;

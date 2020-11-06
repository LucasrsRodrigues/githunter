import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;

  > div {
    padding: 15px 40px 50px 12px;

    header {
      display: flex;

      .avatar-skeleton {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 15px;
        flex: 1;

        .row-skeleton {
          height: 12px;

          &:nth-child(1) {
            width: 30%;
          }
          &:nth-child(2) {
            width: 55%;
            margin-top: 10px;
          }
        }
      }
    }

    span {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      .row-skeleton {
        height: 12px;
        &:nth-child(1) {
          width: 100%;
        }
        &:nth-child(2) {
          width: 90%;
          margin-top: 10px;
        }
      }
    }
  }
`;
export const Panel = styled.div`
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);

  &.no-shadow {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 2px 3px rgba(0, 0, 0, 0.05);
  }
`;

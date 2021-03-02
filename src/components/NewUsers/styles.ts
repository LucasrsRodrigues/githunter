import styled from 'styled-components';

export const Container = styled.div`
  section {
    > h1 {
      font-size: 25px;
      margin-bottom: 25px;
    }

    .section-content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      grid-auto-flow: row;

      @media (max-width: 850px) {
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
      }

      @media (max-width: 574px) {
        grid-template-columns: repeat(1, 1fr);
        justify-items: center;
      }
    }
  }
`;

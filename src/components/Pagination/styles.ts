import styled, { css } from 'styled-components';

interface PaginationItemProps {
  isSelect?: boolean;
}

export const Container = styled.div`
  .container-header {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .custom-select {
      select {
        background: #fff;
        width: 50px;
        color: #ff3961;
        border: none;
        border-radius: 5px;
        padding: 2px 5px;
      }
    }
  }
  .wrapper-repositories {
    margin-top: 20px;
    width: 100%;
    max-width: 800px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;

    @media (max-width: 992px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const Paginate = styled.div`
  display: flex;
  min-width: 500px;
  justify-content: space-between;
`;

export const PaginationButton = styled.div`
  display: flex;
  align-items: center;
`;

export const PaginationItem = styled.div<PaginationItemProps>`
  margin: 0 10px;

  ${props =>
    props.isSelect &&
    css`
      color: #8e72dc;
    `}

  &:hover {
    cursor: pointer;
  }
`;

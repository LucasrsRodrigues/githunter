import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.footer`
  position: relative;
  margin-top: 50px;
  bottom: 0;
  width: 100%;
  background: #fff;
  padding: 15px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-left: 15px;
      color: #8e72dc;
      translate: color 0.2;
      &:hover {
        color: ${shade(0.2, '#8e72dc')};
      }
    }
  }
`;

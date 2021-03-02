import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  background: #fff;
  width: 96px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;

  .header .logo a {
    font-size: 20px;
  }
  a {
    color: #3b3b3a;

   &:hover {
      color: ${shade(0.2, '#8e72dc')};
    }
  }
  }


  .body {
    ul li {
      list-style: none;
      transition: color 0.2s;

      & + li {
        margin-top: 15px;
      }


    }
  }

  .footer {
    a + a {
      margin-left: 15px;
    }
  }
`;

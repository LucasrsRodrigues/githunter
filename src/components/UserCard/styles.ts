import styled from 'styled-components';

import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  text-decoration: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 15px 0;
  width: 250px;
  height: 300px;

  border-radius: 8px;
  transition: background 0.3s;

  &:hover {
    background: ${shade(0.1, '#fff')};
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  h1 {
    font-size: 16px;
    color: #434343;
    margin-top: 15px;
  }
`;

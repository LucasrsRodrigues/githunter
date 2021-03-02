import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.header`
  padding: 20px 50px;
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;

  .search {
    width: 100%;
    max-width: 800px;
  }

  @media (max-width: 992px) {
    padding: 10px 25px;
    flex-direction: column;
    .logo {
      a {
        font-size: 20px;
      }
    }
  }
`;

export const InputContainer = styled.div`
  flex: 1;
  display: flex;
  background: #eef3f8;
  border-radius: 8px;
  align-items: center;
  padding: 0 15px;
  margin-left: 80px;

  input {
    padding: 0 15px;
    width: 30%;
    height: 40px;
    border: 0;
    flex: 1;
    color: #434343;
    background: transparent;
  }

  @media (max-width: 992px) {
    margin-left: 0;
  }
`;

export const Form = styled.form``;

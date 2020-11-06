import React, { useCallback, FormEvent, useState } from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Container, InputContainer, Form } from './styles';

const Header: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useState('');

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      history.push(`/user/${user}`);
    },
    [user, history],
  );

  return (
    <Container>
      <div className="logo">
        <Link to="/">GitHunter</Link>
      </div>
      <div className="search">
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <FiSearch size={20} />
            <input
              type="text"
              onChange={e => {
                setUser(e.target.value);
              }}
              placeholder="Pesquise por um usuario ex: lucasrsrodrigues"
            />
          </InputContainer>
        </Form>
      </div>
    </Container>
  );
};

export default Header;

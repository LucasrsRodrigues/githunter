import React, { FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import UserCard from '../../components/UserCard';
import { githubApi } from '../../services/api';

import * as S from './styles';

interface UserProps {
  id: string;
  avatar_url: string;
  login: string;
}

const FindUser: React.FC = () => {
  const [newUser, setNewUser] = useState('');
  const [inputError, setInputError] = useState('');
  const [users, setUsers] = useState<UserProps[]>(() => {
    const storagedUsers = localStorage.getItem('@GitHunter:users');

    if (storagedUsers) {
      return JSON.parse(storagedUsers);
    }
    return [];
  });

  async function handleAddUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!newUser) {
      setInputError('Digite o username do usuario');
      return;
    }

    try {
      const response = await githubApi.get(`users/${newUser}`);
      const user = response.data;

      setUsers([...users, user]);
      setNewUser('');
      setInputError('');
    } catch (error) {
      setInputError('Erro na busca por esse usuario');
    }
  }

  useEffect(() => {
    localStorage.setItem('@GitHunter:users', JSON.stringify(users));
  }, [users]);

  return (
    <S.Container>
      <Sidebar />
      <main>
        <h1>Encontre usuários do Github</h1>
        <S.Form hasError={!!inputError} onSubmit={handleAddUser}>
          <input
            value={newUser}
            onChange={e => setNewUser(e.target.value)}
            placeholder="Digite o username do usuario"
          />
          <button type="submit">Pesquisar</button>
        </S.Form>

        {inputError && <S.Error>{inputError}</S.Error>}

        <S.Users>
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </S.Users>
      </main>
    </S.Container>
  );
};

export default FindUser;

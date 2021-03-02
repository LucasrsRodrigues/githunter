import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { githubApi } from '../../services/api';
import * as S from './styles';
import Sidebar from '../../components/Sidebar';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Home: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GitHunter:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });

  async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Adicao de um novo repositório

    if (!newRepo) {
      setInputError('Digite autor/nome do repositório');
      return;
    }

    try {
      const response = await githubApi.get(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }

  useEffect(() => {
    localStorage.setItem(
      '@GitHunter:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  return (
    <S.Container>
      <Sidebar />
      <main>
        <h1>Explore repositórios no Github</h1>
        <S.Form hasError={!!inputError} onSubmit={handleAddRepository}>
          <input
            value={newRepo}
            onChange={e => setNewRepo(e.target.value)}
            placeholder="Digite o nome do repositório"
          />
          <button type="submit">Pesquisar</button>
        </S.Form>

        {inputError && <S.Error>{inputError}</S.Error>}

        <S.Repositories>
          {repositories.map(repository => (
            <Link
              key={repository.full_name}
              to={`/repository/${repository.full_name}`}
            >
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />

              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>

              <FiChevronRight size={20} />
            </Link>
          ))}
        </S.Repositories>
      </main>
    </S.Container>
  );
};

export default Home;

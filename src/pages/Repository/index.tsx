import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { githubApi } from '../../services/api';

import * as S from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}
const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    async function loadData() {
      const [loadRepository, loadIssues] = await Promise.all([
        await githubApi.get(`repos/${params.repository}`),
        await githubApi.get(`repos/${params.repository}/issues`),
      ]);

      setRepository(loadRepository.data);
      setIssues(loadIssues.data);
    }

    loadData();
  }, [params.repository]);

  return (
    <S.Container>
      <Sidebar />
      <main>
        <div className="header">
          <Link to="/dashboard">
            <FiChevronLeft size={16} />
            Voltar
          </Link>
        </div>
        {repository && (
          <S.RepositoryInfo>
            <header>
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
            </header>
            <ul>
              <li>
                <strong>{repository.stargazers_count}</strong>
                <span>Stars</span>
              </li>
              <li>
                <strong>{repository.forks_count}</strong>
                <span>Forks</span>
              </li>
              <li>
                <strong>{repository.open_issues_count}</strong>
                <span>Issues abertas</span>
              </li>
            </ul>
          </S.RepositoryInfo>
        )}
        <S.Issues>
          {issues.map(issue => (
            <a target="_blank" key={issue.id} href={issue.html_url}>
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>

              <FiChevronRight size={20} />
            </a>
          ))}
        </S.Issues>
      </main>
    </S.Container>
  );
};

export default Repository;

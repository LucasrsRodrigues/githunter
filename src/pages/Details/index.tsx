import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Container, Content } from './styles';
import { githubApi } from '../../services/api';

import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import Footer from '../../components/Footer';
import LoadingProfile from '../../components/Shimmer/LoadingProfile';
import LoadRepository from '../../components/Shimmer/LoadRepository';
import NewUsers from '../../components/NewUsers';

interface HomeParams {
  name: string;
}

interface UserProps {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  html_url: string;
}

const Details: React.FC = () => {
  const { params } = useRouteMatch<HomeParams>();

  const [user, setUser] = useState<UserProps>({} as UserProps);
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    githubApi.get(`users/${params.name}`).then(response => {
      setUser(response.data);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [params.name]);
  return (
    <Container>
      <Header />
      <main>
        {loading ? (
          <LoadingProfile />
        ) : (
          <aside>
            <div className="user">
              <div>
                <img src={user.avatar_url} alt="LucasrsRodrigues" />
                <div>
                  <h2>{user.name}</h2>
                  <span>{user.login}</span>
                </div>
              </div>
              <div className="bio">{user.bio}</div>
            </div>
          </aside>
        )}

        <Content>
          <section className="statistic">
            <h1>Estatística</h1>
            {loading ? (
              <LoadRepository statistic />
            ) : (
              <a href={user.html_url}>
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${user.login}&hide_border=true&show_icons=true&theme=buefy`}
                  alt=""
                />
              </a>
            )}
          </section>
          <section className="projects">
            <h1>Projetos</h1>
            <Pagination />
          </section>
          <NewUsers />
        </Content>
      </main>
      {!loading && <Footer />}
    </Container>
  );
};

export default Details;

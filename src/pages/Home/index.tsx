import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import tiquinho from '../../assets/tiquinho.png';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <main>
        <img src={tiquinho} alt="tiquinho" />
        <h1>Olá! bem vindo ao GitHunter</h1>
        <div className="wrapper-content">
          <p>
            Um pequeno projeto desenvolvido com objetivo de estudar mais as
            funcionalidades do <span>React.js</span>
          </p>
          <p>
            É só pesquisar o <span>username</span> de um usuario do github!
          </p>
        </div>
      </main>
      <Footer />
    </Container>
  );
};

export default Home;

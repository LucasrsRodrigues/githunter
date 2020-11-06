/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        Desenvolvido por Lucas Rodrigues
        <a href="https://www.linkedin.com/in/lucasrsrodrigues/" target="_blank">
          <FaLinkedinIn size={20} />
        </a>
        <a href="https://github.com/LucasrsRodrigues" target="_blank">
          <FaGithub size={20} />
        </a>
      </div>
    </Container>
  );
};

export default Footer;

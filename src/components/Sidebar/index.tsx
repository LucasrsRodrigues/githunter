import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiFile } from 'react-icons/fi';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import * as S from './styles';

const Sidebar: React.FC = () => {
  return (
    <S.Container>
      <div className="header">
        <div className="logo">
          <Link to="/">Githunter</Link>
        </div>
      </div>
      <div className="body">
        <ul>
          <li>
            <Link to="/">
              <FiFile size={30} />
            </Link>
          </li>
          <li>
            <Link to="/users">
              <FiUser size={30} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer">
        <a href="https://www.linkedin.com/in/lucasrsrodrigues/" target="_blank">
          <FaLinkedinIn size={20} />
        </a>
        <a href="https://github.com/LucasrsRodrigues" target="_blank">
          <FaGithub size={20} />
        </a>
      </div>
    </S.Container>
  );
};

export default Sidebar;

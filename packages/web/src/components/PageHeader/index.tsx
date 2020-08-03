import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '@assets/images/logo.svg';
import backIcon from '@assets/images/icons/back.svg';

import { Container } from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <Container>
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>

        {children}
      </div>
    </Container>
  );
};

export default PageHeader;

import React from 'react';

import { Container } from './styles';

import imgHeader from '../../assets/admin-small.png';

const Header = () => (
  <Container>
    <div>
      <h1>Administração</h1>
    </div>
    <img src={imgHeader} alt="Imagem cabeçalho" />
  </Container>
);

export default Header;

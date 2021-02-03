import React from 'react';

import { Container } from './styles';

const Input = ({ onChange, value, ...rest }) => (
  <Container>
    <input value={value} {...rest} type="text" />
  </Container>
);

export default Input;

import React from 'react';

import { Container, CopyrightText } from './styles';

const Footer = () => {
  return (
    <Container>
      <CopyrightText>
        &copy; {new Date().getFullYear()} - Jorge Antônio da Silva
      </CopyrightText>
    </Container>
  );
};

export default Footer;

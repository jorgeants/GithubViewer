import React from 'react';

import RepositoryResume from '~/components/RepositoryResume';
import RepositoryList from '~/components/RepositoryList';

import { Container, Title } from './styles';

const RepositoryContainer = () => {
  return (
    <Container>
      <Title>Repositórios</Title>

      <RepositoryResume />

      <RepositoryList />
    </Container>
  );
};

export default RepositoryContainer;

import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Title, Resume, Info, Label } from './styles';

const RepositoryResume = () => {
  const resume = useSelector(state => state.repositories.resume);

  const stringfyCountLanguages = languages => {
    return Object.keys(languages)
      .map(key => {
        return `${key} (${languages[key]})`;
      })
      .join(', ');
  };

  return (
    <Container>
      <Title>Repositórios</Title>

      <Resume>
        <Info>
          <Label>Tamanho total: </Label> {resume.totalSize}
        </Info>
        <Info>
          <Label>Linguagens: </Label>{' '}
          {resume.languages
            ? stringfyCountLanguages(resume.languages)
            : 'Nenhuma linguagem'}
        </Info>
        <Info>
          <Label>Issues abertos: </Label> {resume.totalOpenIssuesCount}
        </Info>
      </Resume>
    </Container>
  );
};

export default RepositoryResume;

import React from 'react';

import { Item, Details, Name, Description, RepoData } from './styles';

const RepositoryItem = ({ item }) => {
  const repoSize = size => {
    return `Tamanho: ${+`${Math.round(`${size / 1024}e+2`)}e-2`} KB | `;
  };

  const repoLanguage = language => {
    return language && `Linguagem: ${language} | `;
  };

  const repoIssues = issues => {
    return `Issues abertos: ${issues}`;
  };

  return (
    <Item>
      <Details>
        <Name>{item.name}</Name>
        {item.description && <Description>{item.description}</Description>}
        <RepoData>
          {repoSize(item.size)}
          {repoLanguage(item.language)}
          {repoIssues(item.open_issues_count)}
        </RepoData>
      </Details>
    </Item>
  );
};

export default RepositoryItem;

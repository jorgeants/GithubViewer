import React from 'react';

import convertKiloBytes from '~/helpers/convertKiloBytes';

import { Item, Details, Name, Description, RepoData } from './styles';

const RepositoryItem = ({ item }) => {
  const repoSize = size => {
    return `Tamanho: ${convertKiloBytes(size)} | `;
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

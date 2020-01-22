import React from 'react';
import PropTypes from 'prop-types';

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

RepositoryItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    size: PropTypes.number,
    language: PropTypes.string,
    open_issues_count: PropTypes.number,
  }).isRequired,
};

export default RepositoryItem;

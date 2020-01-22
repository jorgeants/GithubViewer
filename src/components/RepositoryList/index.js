import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { requestNextPage } from '~/store/modules/users/actions';

import RepositoryResume from '~/components/RepositoryResume';
import RepositoryItem from '~/components/RepositoryItem';

import { List } from './styles';

const RepositoryList = () => {
  const data = useSelector(state => state.repositories.list);
  const loading = useSelector(state => state.repositories.loading);
  const error = useSelector(state => state.repositories.error);
  // const nextPageURL = useSelector(state => state.repositories.nextPageURL);
  const dispatch = useDispatch();

  const loadRepositories = () => {
    return !loading || !error ? dispatch(requestNextPage()) : null;
  };

  const renderLoadingFooter = () => {
    return loading ? <ActivityIndicator size="small" color="#000" /> : null;
  };

  return (
    <List
      data={data}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={<RepositoryResume />}
      onEndReached={loadRepositories}
      onEndReachedThreshold={0}
      ListFooterComponent={renderLoadingFooter}
    />
  );
};

export default RepositoryList;

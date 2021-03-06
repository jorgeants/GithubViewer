import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { requestNextPage } from '~/store/modules/repositories/actions';

import RepositoryResume from '~/components/RepositoryResume';
import RepositoryItem from '~/components/RepositoryItem';

import { theme } from '~/theme/globalStyle';
import { List, ActivityIndicatorContent } from './styles';

const RepositoryList = () => {
  const data = useSelector(state => state.repositories.list);
  const loading = useSelector(state => state.repositories.loading);
  const error = useSelector(state => state.repositories.error);
  const nextPageURL = useSelector(state => state.repositories.nextPageURL);
  const dispatch = useDispatch();

  const loadRepositories = () => {
    return (!loading || !error) && nextPageURL
      ? dispatch(requestNextPage())
      : null;
  };

  const renderLoadingFooter = () => {
    return loading ? (
      <ActivityIndicatorContent>
        <ActivityIndicator size="small" color={theme.primary} />
      </ActivityIndicatorContent>
    ) : null;
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

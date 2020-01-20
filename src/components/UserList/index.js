import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { requestNextPage } from '~/store/modules/users/actions';

import UserItem from '~/components/UserItem';

import { List } from './styles';

const UserList = () => {
  const data = useSelector(state => state.users.list);
  const loading = useSelector(state => state.users.loading);
  const error = useSelector(state => state.users.error);
  const nextPageURL = useSelector(state => state.users.nextPageURL);
  const dispatch = useDispatch();

  const loadUsers = () => {
    return (!loading || !error) && nextPageURL
      ? dispatch(requestNextPage())
      : null;
  };

  const renderLoadingFooter = () => {
    return loading ? <ActivityIndicator size="small" color="#000" /> : null;
  };

  return (
    <List
      data={data}
      renderItem={({ item }) => <UserItem item={item} />}
      keyExtractor={item => item.id.toString()}
      onEndReached={loadUsers}
      onEndReachedThreshold={0}
      ListFooterComponent={renderLoadingFooter}
    />
  );
};

export default UserList;

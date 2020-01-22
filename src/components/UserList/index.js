import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { requestNextPage } from '~/store/modules/users/actions';

import UserItem from '~/components/UserItem';

import { theme } from '~/theme/globalStyle';
import { List } from './styles';

const UserList = ({ navigation }) => {
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
    return loading ? (
      <ActivityIndicator size="small" color={theme.primary} />
    ) : null;
  };

  return (
    <List
      data={data}
      renderItem={({ item }) => (
        <UserItem navigation={navigation} item={item} />
      )}
      keyExtractor={item => item.id.toString()}
      onEndReached={loadUsers}
      onEndReachedThreshold={0}
      ListFooterComponent={renderLoadingFooter}
    />
  );
};

UserList.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default UserList;

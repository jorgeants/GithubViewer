import React from 'react';
import { useSelector } from 'react-redux';

import UserItem from '~/components/UserItem';

import { List } from './styles';

const UserList = () => {
  const data = useSelector(state => state.users.list);

  return (
    <List
      data={data}
      renderItem={({ item }) => <UserItem item={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default UserList;

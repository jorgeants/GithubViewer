import React from 'react';

import {
  Item,
  Avatar,
  Details,
  DetailsUserName,
  DetailsProfileUrl,
} from './styles';

const UserItem = ({ item }) => {
  return (
    <Item>
      <Avatar source={{ uri: item.avatar_url }} resizeMode="contain" />
      <Details>
        <DetailsUserName>{item.login}</DetailsUserName>
        <DetailsProfileUrl>{item.url}</DetailsProfileUrl>
      </Details>
    </Item>
  );
};

export default UserItem;

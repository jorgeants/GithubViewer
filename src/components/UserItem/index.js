import React from 'react';

import {
  Item,
  Avatar,
  Details,
  DetailsUserName,
  DetailsProfileUrl,
} from './styles';

const UserItem = ({ item, navigation }) => {
  const handleGoToUserDetails = () => {
    navigation.navigate('UserDetails', { username: item.login });
  };

  return (
    <Item onPress={handleGoToUserDetails}>
      <Avatar source={{ uri: item.avatar_url }} resizeMode="contain" />
      <Details>
        <DetailsUserName>{item.login}</DetailsUserName>
        <DetailsProfileUrl>{item.html_url}</DetailsProfileUrl>
      </Details>
    </Item>
  );
};

export default UserItem;

import React from 'react';
import PropTypes from 'prop-types';

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

UserItem.propTypes = {
  item: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default UserItem;

import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Octicons';

import {
  Header,
  ProfileFirstInfo,
  ProfileMoreInfo,
  Avatar,
  ProfileDetails,
  ProfileName,
  ProfileUserName,
  ProfileBio,
  ProfileInfo,
  ProfileInfoText,
} from './styles';

const ProfileHeader = ({ user }) => {
  return (
    <Header>
      <ProfileFirstInfo>
        <Avatar source={{ uri: user.avatar_url }} resizeMode="contain" />
        <ProfileDetails>
          <ProfileName>{user.name}</ProfileName>
          <ProfileUserName>@{user.login}</ProfileUserName>
        </ProfileDetails>
      </ProfileFirstInfo>
      {user.bio || user.location || user.blog ? (
        <ProfileMoreInfo>
          {user.bio ? <ProfileBio>{user.bio}</ProfileBio> : null}
          {user.location ? (
            <ProfileInfo>
              <Icon name="location" size={18} color="#000" />
              <ProfileInfoText>{user.location}</ProfileInfoText>
            </ProfileInfo>
          ) : null}
          {user.blog ? (
            <ProfileInfo>
              <Icon name="link" size={18} color="#000" />
              <ProfileInfoText>{user.blog}</ProfileInfoText>
            </ProfileInfo>
          ) : null}
        </ProfileMoreInfo>
      ) : null}
    </Header>
  );
};

ProfileHeader.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string,
    login: PropTypes.string.isRequired,
    bio: PropTypes.string,
    location: PropTypes.string,
    blog: PropTypes.string,
  }),
};

ProfileHeader.defaultProps = {
  user: PropTypes.shape({
    name: null,
    bio: null,
    location: null,
    blog: null,
  }),
};

export default ProfileHeader;

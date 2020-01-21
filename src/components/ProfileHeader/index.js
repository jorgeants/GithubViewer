import React from 'react';
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
      <ProfileMoreInfo>
        {user.bio && <ProfileBio>{user.bio}</ProfileBio>}
        {user.location && (
          <ProfileInfo>
            <Icon name="location" size={22} color="#000" />
            <ProfileInfoText>{user.location}</ProfileInfoText>
          </ProfileInfo>
        )}
        {user.blog && (
          <ProfileInfo>
            <Icon name="link" size={22} color="#000" />
            <ProfileInfoText>{user.blog}</ProfileInfoText>
          </ProfileInfo>
        )}
      </ProfileMoreInfo>
    </Header>
  );
};

export default ProfileHeader;

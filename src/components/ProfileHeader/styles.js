import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Header = styled.View`
  flex-direction: column;
  padding: 15px 0;
`;

export const ProfileFirstInfo = styled.View`
  flex-direction: row;
  max-width: ${Dimensions.get('window').width}px;
  padding-bottom: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;
export const ProfileMoreInfo = styled.View`
  padding: 10px 0 15px 0;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;
export const Avatar = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 5px;
  margin-right: 15px;
`;
export const ProfileDetails = styled.View`
  justify-content: center;
`;
export const ProfileName = styled.Text`
  font-size: 24px;
  color: #000;
  font-weight: 800;
  margin-bottom: 5px;
`;
export const ProfileUserName = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: 500;
  margin-bottom: 5px;
`;
export const ProfileBio = styled.Text`
  font-size: 16px;
  line-height: 30px;
  color: #666;
`;
export const ProfileInfo = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 2px;
`;
export const ProfileInfoText = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #666;
  padding-left: 6px;
`;

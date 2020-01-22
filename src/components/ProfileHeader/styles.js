import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { theme } from '~/theme/globalStyle';

export const Header = styled.View`
  flex-direction: column;
  padding: 15px 0;
`;
export const ProfileFirstInfo = styled.View`
  flex-direction: row;
  max-width: ${Dimensions.get('window').width}px;
  padding-bottom: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.mediumGray};
`;
export const ProfileMoreInfo = styled.View`
  padding: 8px 0 12px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.mediumGray};
`;
export const Avatar = styled.Image`
  width: 92px;
  height: 92px;
  border-radius: 5px;
  margin-right: 15px;
`;
export const ProfileDetails = styled.View`
  justify-content: center;
`;
export const ProfileName = styled.Text`
  font-size: 22px;
  color: ${theme.primary};
  font-weight: 800;
  margin-bottom: 5px;
`;
export const ProfileUserName = styled.Text`
  font-size: 16px;
  color: ${theme.primary};
  font-weight: 500;
  margin-bottom: 4px;
`;
export const ProfileBio = styled.Text`
  font-size: 15px;
  line-height: 20px;
  color: ${theme.darkGray};
  margin-bottom: 8px;
`;
export const ProfileInfo = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 2px 0;
`;
export const ProfileInfoText = styled.Text`
  font-size: 15px;
  color: ${theme.darkGray};
  padding-left: 6px;
`;

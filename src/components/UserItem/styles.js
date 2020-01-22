import styled from 'styled-components/native';
import { theme } from '~/theme/globalStyle';

export const Item = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
`;
export const Avatar = styled.Image`
  border-radius: 5px;
  width: 76px;
  height: 76px;
  margin-right: 10px;
`;
export const Details = styled.View``;
export const DetailsUserName = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.primary};
`;
export const DetailsProfileUrl = styled.Text`
  font-size: 14px;
  color: ${theme.darkGray};
`;

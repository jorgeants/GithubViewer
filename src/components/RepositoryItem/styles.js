import styled from 'styled-components/native';
import { theme } from '~/theme/globalStyle';

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.mediumGray};
`;
export const Details = styled.View``;
export const Name = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.primary};
`;
export const Description = styled.Text`
  font-size: 14px;
  color: ${theme.darkGray};
`;
export const RepoData = styled.Text`
  padding-top: 6px;
`;

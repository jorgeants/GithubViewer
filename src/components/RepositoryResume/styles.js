import styled from 'styled-components/native';
import { theme } from '~/theme/globalStyle';

export const Container = styled.View``;
export const Title = styled.Text`
  font-size: 22px;
  font-weight: 800;
  color: ${theme.primary};
  margin-bottom: 10px;
`;
export const Resume = styled.View`
  border: 1px solid ${theme.mediumGray};
  padding: 10px;
`;
export const Info = styled.Text`
  font-size: 14px;
  color: ${theme.darkGray};
`;
export const Label = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.primary};
`;

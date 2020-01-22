import styled from 'styled-components/native';
import { theme } from '~/theme/globalStyle';

export const Container = styled.View`
  justify-content: space-between;
  padding: 0px 15px 0px 15px;
  height: 100%;
`;
export const Content = styled.View`
  flex-direction: column;
  flex: 1;
`;
export const ActivityIndicatorContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const ErrorMessageContent = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${theme.error};
  padding: 10px 40px;
`;

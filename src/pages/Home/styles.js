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
export const Header = styled.View`
  flex-direction: column;
  padding-bottom: 20px;
`;
export const ErrorMessageContent = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${theme.error};
  padding: 10px 40px;
`;
export const FullLogo = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;
export const GithubLogo = styled.Image`
  width: 140px;
  height: 64px;
`;
export const AppName = styled.Text`
  font-size: 40px;
  font-weight: 200;
`;
export const SearchContainer = styled.View`
  flex-direction: column;
  width: 100%;
`;
export const SearchWrapper = styled.View`
  flex-direction: row;
`;
export const SearchLabel = styled.Text`
  padding: 10px 0;
`;
export const SearchInput = styled.TextInput`
  flex: 1;
  border: 1px solid ${theme.primary};
  padding: 10px 4px;
  border-radius: 5px;
  margin-right: 6px;
  font-size: 16px;
`;
export const SearchButton = styled.TouchableOpacity`
  width: 90px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.primary};
  border: 1px solid ${theme.primary};
  padding: 10px 6px;
  border-radius: 5px;
`;
export const SearchButtonText = styled.Text`
  color: ${theme.light};
  font-size: 16px;
`;

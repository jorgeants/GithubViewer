/* eslint-disable global-require */
import React, { useState } from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { requestSearch } from '~/store/modules/users/actions';

import UserList from '~/components/UserList';
import Footer from '~/components/Footer';

import { theme } from '~/theme/globalStyle';
import {
  Container,
  Content,
  Header,
  ErrorMessageContent,
  FullLogo,
  GithubLogo,
  AppName,
  SearchContainer,
  SearchLabel,
  SearchWrapper,
  SearchInput,
  SearchButton,
  SearchButtonText,
} from './styles';

export default function Home({ navigation }) {
  const [searchTerm, changeSearchTerm] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(state => state.users.loading);
  const error = useSelector(state => state.users.error);
  const errorMessage = useSelector(state => state.users.errorMessage);

  const handleChangeSearchTerm = term => {
    changeSearchTerm(term);
  };

  const handleSearch = () => {
    return searchTerm.length > 0 ? dispatch(requestSearch(searchTerm)) : false;
  };

  return (
    <SafeAreaView>
      <Container>
        <Content>
          <Header>
            <FullLogo>
              <GithubLogo
                source={require('~/assets/GitHub_Logo.png')}
                resizeMode="contain"
              />
              <AppName>Viewer</AppName>
            </FullLogo>
            <SearchContainer>
              <SearchLabel>Digite o usuário que deseja buscar</SearchLabel>
              <SearchWrapper>
                <SearchInput
                  allowFontScaling
                  selectTextOnFocus
                  autoCapitalize="none"
                  value={searchTerm}
                  onChangeText={handleChangeSearchTerm}
                />
                <SearchButton onPress={handleSearch}>
                  <SearchButtonText>
                    {loading ? (
                      <ActivityIndicator size="small" color={theme.light} />
                    ) : (
                      'Buscar'
                    )}
                  </SearchButtonText>
                </SearchButton>
              </SearchWrapper>
            </SearchContainer>
          </Header>

          {error ? (
            <ErrorMessageContent>{errorMessage}</ErrorMessageContent>
          ) : (
            <UserList navigation={navigation} />
          )}
        </Content>

        <Footer />
      </Container>
    </SafeAreaView>
  );
}

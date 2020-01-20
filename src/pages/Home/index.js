import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';

import { requestSearch } from '~/store/modules/users/actions';

import UserList from '~/components/UserList';
import Footer from '~/components/Footer';

import {
  Container,
  Content,
  Header,
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

export default function Home() {
  const [searchTerm, changeSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleChangeSearchTerm = term => {
    changeSearchTerm(term);
  };

  const handleSearch = () => {
    dispatch(requestSearch(searchTerm));
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
                  <SearchButtonText>Buscar</SearchButtonText>
                </SearchButton>
              </SearchWrapper>
            </SearchContainer>
          </Header>

          <UserList />
        </Content>

        <Footer />
      </Container>
    </SafeAreaView>
  );
}

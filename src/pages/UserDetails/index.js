import React, { useState, useEffect } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getUserDetails } from '~/store/modules/users/actions';
import { requestRepositoriesLoad } from '~/store/modules/repositories/actions';

import ProfileHeader from '~/components/ProfileHeader';
import RepositoryList from '~/components/RepositoryList';
import Footer from '~/components/Footer';

import { Container, Content, RepositoryContainer } from './styles';

export default function UserDetails({ navigation }) {
  const [username] = useState(navigation.getParam('username'));
  const dispatch = useDispatch();

  const user = useSelector(state => state.users.userDetails);

  useEffect(() => {
    dispatch(getUserDetails(username));
    dispatch(requestRepositoriesLoad(username));
  }, [username]);

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <Container>
        <Content>
          {user && <ProfileHeader user={user} />}
          <RepositoryContainer>
            <RepositoryList />
          </RepositoryContainer>
        </Content>
        <Footer />
      </Container>
    </SafeAreaView>
  );
}

UserDetails.navigationOptions = {
  title: 'Usuário',
};

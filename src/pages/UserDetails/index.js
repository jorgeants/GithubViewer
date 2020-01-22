import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, StatusBar, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getUserDetails } from '~/store/modules/users/actions';
import { requestRepositoriesLoad } from '~/store/modules/repositories/actions';

import ProfileHeader from '~/components/ProfileHeader';
import RepositoryList from '~/components/RepositoryList';
import Footer from '~/components/Footer';

import { theme } from '~/theme/globalStyle';
import {
  Container,
  Content,
  ErrorMessageContent,
  ActivityIndicatorContent,
} from './styles';

export default function UserDetails({ navigation }) {
  const [username] = useState(navigation.getParam('username'));

  const user = useSelector(state => state.users.userDetails);
  const loading = useSelector(state => state.users.loading);
  const error = useSelector(state => state.users.error);
  const errorMessage = useSelector(state => state.users.errorMessage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetails(username));
    dispatch(requestRepositoriesLoad(username));
  }, [username]);

  const renderContent = () => {
    return !loading ? (
      <>
        {user && <ProfileHeader user={user} />}
        <RepositoryList />
      </>
    ) : (
      <ActivityIndicatorContent>
        <ActivityIndicator size="large" color={theme.primary} />
      </ActivityIndicatorContent>
    );
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <Container>
        <Content>
          {error ? (
            <ErrorMessageContent>{errorMessage}</ErrorMessageContent>
          ) : (
            renderContent()
          )}
        </Content>
        <Footer />
      </Container>
    </SafeAreaView>
  );
}

UserDetails.navigationOptions = {
  title: 'Usuário',
};

UserDetails.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

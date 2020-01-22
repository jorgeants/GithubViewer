import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '~/pages/Home';
import UserDetails from '~/pages/UserDetails';
import { theme } from '~/theme/globalStyle';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          headerShown: false,
        },
      },
      UserDetails,
    },
    {
      defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerTintColor: theme.light,
        headerStyle: {
          backgroundColor: theme.primary,
        },
        headerLeftContainerStyle: {
          marginLeft: 10,
        },
      },
    }
  )
);

export default Routes;

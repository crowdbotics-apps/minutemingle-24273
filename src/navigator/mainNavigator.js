import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile200643Navigator from '../features/UserProfile200643/navigator';
import Settings200642Navigator from '../features/Settings200642/navigator';
import Settings200640Navigator from '../features/Settings200640/navigator';
import SignIn2200638Navigator from '../features/SignIn2200638/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile200643: { screen: UserProfile200643Navigator },
Settings200642: { screen: Settings200642Navigator },
Settings200640: { screen: Settings200640Navigator },
SignIn2200638: { screen: SignIn2200638Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard2590243Navigator from '../features/Dashboard2590243/navigator';
import Dashboard1490240Navigator from '../features/Dashboard1490240/navigator';
import BlankScreen290230Navigator from '../features/BlankScreen290230/navigator';
import BlankScreen190229Navigator from '../features/BlankScreen190229/navigator';
import BlankScreen090223Navigator from '../features/BlankScreen090223/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard2590243: { screen: Dashboard2590243Navigator },
Dashboard1490240: { screen: Dashboard1490240Navigator },
BlankScreen290230: { screen: BlankScreen290230Navigator },
BlankScreen190229: { screen: BlankScreen190229Navigator },
BlankScreen090223: { screen: BlankScreen090223Navigator },

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

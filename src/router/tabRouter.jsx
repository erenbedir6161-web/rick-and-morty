import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Characters from '../screens/characters';
import Episodes from '../screens/episodes';
import Locations from '../screens/locations';
import Settings from '../screens/settings';
import { CHARACTERS, EPISODES, LOCATIONS, SETTINGS } from '../utils/routes';
import TabIcon from '../components/router/tabIcon';

import tabBarStyle from '../styles/tabBarStyle';
import Colors from '../theme/colors';

const Tab = createBottomTabNavigator();

const TabRouter = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <TabIcon
            screenName={route.name}
            focused={focused}
            color={color}
            size={size}
          />
        ),
        headerStyle: tabBarStyle.headerStyle,
        tabBarStyle: tabBarStyle.tabBarStyle,
        tabBarActiveTintColor: Colors.PRIMARY,
      })}
    >
      <Tab.Screen name={CHARACTERS} component={Characters} />
      <Tab.Screen name={EPISODES} component={Episodes} />
      <Tab.Screen name={LOCATIONS} component={Locations} />
      <Tab.Screen name={SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};

export default TabRouter;
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CharacterDetail from '../screens/characters/characterDetail';
import FilterCharacters from '../screens/characters/filterCharacters';
import SearchCharacters from '../screens/characters/ searchCharacters';

import {CHARACTERDETAILS,FILTERCHARACTERS,SEARCHCHARACTERS} from '../utils/routes';

import Colors from '../theme/colors';
import TabRouter from './tabRouter';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.BACKGROUNDCOLOR
        },
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen
        options={{headerShown: false}}
        
        name={TABNAVIGATOR} component={TabRouter} />
      <Stack.Screen name={CHARACTERDETAILS} component={CharacterDetail} />
      <Stack.Screen name={FILTERCHARACTERS} component={FilterCharacters} />
      <Stack.Screen name={SEARCHCHARACTERS} component={SearchCharacters} />
    </Stack.Navigator>
  )
}

export default RootNavigator
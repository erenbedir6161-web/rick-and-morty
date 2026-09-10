import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CharacterDetail from '../screens/characterDetails';
import FilterCharacters from '../screens/filterCharacters';
import SearchCharacters from '../screens/searchCharacters';

import {CHARACTERDETAILS,FILTERCHARACTERS,SEARCHCHARACTERS} from '../utils/routes';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={CHARACTERDETAILS} component={CharacterDetail} />
            <Stack.Screen name={FILTERCHARACTERS} component={FilterCharacters} />
            <Stack.Screen name={SEARCHCHARACTERS} component={SearchCharacters} />
        </Stack.Navigator>
    )
}

export default RootNavigator
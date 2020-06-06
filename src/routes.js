import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from '~/pages/Main';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import ToDoCreate from './pages/ToDoCreate';
console.disableYellowBox = true


const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} >
                <Stack.Screen options={{ title: 'My home', headerShown: false }} name="Dashboard" component={Main} />
                <Stack.Screen options={{
                    title: '', headerShown: true,
                    headerStyle: {
                        backgroundColor: '#FFF',
                        elevation: 0,
                    },
                    headerTintColor: '#000',

                }} name="ToDoCreate" component={ToDoCreate} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Routes

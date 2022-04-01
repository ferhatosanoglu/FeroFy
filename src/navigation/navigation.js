import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './stacks'
import Login from '../screens/Login/Login';

const Navigation = () => {
    return (
        < NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default Navigation;
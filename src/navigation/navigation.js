import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './stacks'
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import Home from '../screens/Home/Home';
import Song from '../screens/Song/Song';
import User from '../screens/User/User';
const Navigation = () => {
    return (
        < NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="User" component={User} />
                <Stack.Screen name="Login" component={Login} />


                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Song" component={Song} />


            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default Navigation;
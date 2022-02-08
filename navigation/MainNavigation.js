import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screens/Login/LoginScreen'
import TabNavigator from './TabNavigator';

const MainNavigation = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>

            <Stack.Navigator>

            <Stack.Screen
             name="Login" 
             component={LoginScreen} 
             options={{
                headerShown: false
              }} /> 

 
                <Stack.Screen 
                   name="MainTab"
                   component={TabNavigator}
                /> 

            </Stack.Navigator>
        </NavigationContainer>
    
    )
}

export default MainNavigation;
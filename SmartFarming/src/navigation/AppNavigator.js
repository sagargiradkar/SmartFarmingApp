// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux'; // Assuming you have react-redux installed

import Login from '../components/Auth/Login';
import SignUp from '../components/Auth/SignUp';
import HomeScreen from '../components/Home/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = ({ isAuthenticated }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? 'Home' : 'Login'}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Add more screens for other components as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(AppNavigator);

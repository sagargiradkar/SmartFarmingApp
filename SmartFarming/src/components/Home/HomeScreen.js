// src/components/Home/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/authActions';

const HomeScreen = ({ navigation, isAuthenticated, user, logout }) => {
  const handleLogout = () => {
    // Dispatch logout action
    logout();
  };

  // Redirect to Login screen if not authenticated
  if (!isAuthenticated) {
    navigation.navigate('Login');
  }

  return (
    <View>
      <Text>Welcome, {user}!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

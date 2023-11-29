// src/components/Auth/SignUp.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { signup } from '../../redux/actions/authActions';

const SignUp = ({ navigation, isAuthenticated, signup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Dispatch signup action
    signup({ username, password });
  };

  // Redirect to HomeScreen when authenticated
  if (isAuthenticated) {
    navigation.navigate('Home');
  }

  return (
    <View>
      <Text>Sign Up Screen</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = {
  signup,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

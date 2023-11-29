import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Smart Farming App</Text>
      {/* <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Go to Shop" onPress={() => navigation.navigate('Shop')} /> */}
      {/* Add more buttons for other sections */}
    </View>
  );
};

export default HomeScreen;

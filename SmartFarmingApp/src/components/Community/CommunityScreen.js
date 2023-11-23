import React from 'react';
import { View, Text, Button } from 'react-native';

const CommunityScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Community Screen</Text>
      <Button title="Go to Forum" onPress={() => navigation.navigate('Forum')} />
      {/* Display community-related content */}
    </View>
  );
};

export default CommunityScreen;

import React from 'react';
import { View, Text, Button } from 'react-native';

const ShopScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Shop Screen</Text>
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
      {/* Display products and other shop-related content */}
    </View>
  );
};

export default ShopScreen;

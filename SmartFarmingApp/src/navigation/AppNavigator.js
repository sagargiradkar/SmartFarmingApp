import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import Login from '../components/Auth/Login';
// import SignUp from '../components/Auth/SignUp';
// import HomeScreen from '../components/Home/HomeScreen';
// import UserProfile from '../components/Profile/UserProfile';
// import ShopScreen from '../components/Shop/ShopScreen';
// import Cart from '../components/Shop/Cart';
// import ProductDetails from '../components/Shop/ProductDetails';
// import CalendarScreen from '../components/Calendar/CalendarScreen';
// import CropDetailsScreen from '../components/CropDetails/CropDetailsScreen';
// import WeatherScreen from '../components/Weather/WeatherScreen';
// import CommunityScreen from '../components/Community/CommunityScreen';
// import Forum from '../components/Community/Forum';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                {/* Authentication Screens */}
                <Stack.Screen name="Login" component={Login} />
                {/* <Stack.Screen name="SignUp" component={SignUp} /> */}

                {/* Main App Screens */}
                {/* <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={UserProfile} /> */}
                {/* <Stack.Screen name="Shop" component={ShopScreen} /> */}
                {/* <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="ProductDetails" component={ProductDetails} />
                <Stack.Screen name="Calendar" component={CalendarScreen} />
                <Stack.Screen name="CropDetails" component={CropDetailsScreen} />
                <Stack.Screen name="Weather" component={WeatherScreen} />
                <Stack.Screen name="Community" component={CommunityScreen} />
                <Stack.Screen name="Forum" component={Forum} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

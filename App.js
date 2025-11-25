import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import AddPhotoScreen from './screens/AddPhotoScreen';
import PhotoPreviewScreen from './screens/PhotoPreviewScreen';
import VehicleDetailsScreen from './screens/VehicleDetailsScreen';
import LocationScreen from './screens/LocationScreen';
import OffenceScreen from './screens/OffenceScreen';
import SuccessScreen from './screens/SuccessScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="AddPhoto" component={AddPhotoScreen} />
        <Stack.Screen name="PhotoPreview" component={PhotoPreviewScreen} />
        <Stack.Screen name="VehicleDetails" component={VehicleDetailsScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Offence" component={OffenceScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
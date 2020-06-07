import React from 'react';
import {
  NavigationContainer
} from '@react-navigation/native'
import {
  createStackNavigator
} from '@react-navigation/stack'
import HomeScreen from './src/views/Home'
import NewsScreen from './src/views/News'
import DetailScreen from './src/views/Details'
import SearchBar from './src/components/SearchBar'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ header: () => <SearchBar /> }}
        />
        <Stack.Screen 
          name="News" 
          component={NewsScreen} 
          options={({ route }) => ({ title: route.params.name })} 
        />
        <Stack.Screen 
          name="Details"
          component={DetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

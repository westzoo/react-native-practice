import React, {useState, useRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainView from './pages/MainView';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainView}
          options={{title: 'Taewon'}}
        />
        {/* <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Details1" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

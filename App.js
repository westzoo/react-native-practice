import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainView from './pages/MainView';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import {Provider} from 'react-redux';
import createStore from './module/store';
const Stack = createStackNavigator();
const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={MainView} />
          <Stack.Screen name="MainPage" component={StartPage} />
          <Stack.Screen name="GamePage" component={GamePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

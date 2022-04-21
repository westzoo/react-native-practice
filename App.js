import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainView from './pages/MainView';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import {Provider} from 'react-redux';
import createStore from './module/store';
import KakaoLayout from './pages/kakaoLayout';
const Stack = createStackNavigator();
const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={KakaoLayout}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoginPage"
            component={StartPage}
            options={{headerShown: false}}
          />
          <Stack.Screen name="GamePage" component={GamePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Keyboard,
  Alert,
  Button,
  Animated,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {useEffect} from 'react/cjs/react.production.min';
import StyledButton from '../components/Button';

const MainView = ({navigation}) => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View
        style={{
          flex: 5,
          backgroundColor: 'gray',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <Text style={styles.title}>오늘은 {days[new Date().getDay()]}요일</Text>

        <Image
          source={require('../img/emojimix.png')}
          style={{width: 100, height: 100, padding: '30%'}}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'blue',
          alignItems: 'center',
          padding: 30,
        }}>
        <StyledButton
          color={'orange'}
          title={'시작하기'}
          onPress={() => navigation.navigate('MainPage')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'gray',
  },
  title: {
    color: 'white',
    fontSize: 40,
    marginTop: 100,
  },
});

export default MainView;

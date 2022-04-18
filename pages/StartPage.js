import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import {StyleSheet, Text, View, Image} from 'react-native';

import {useEffect} from 'react/cjs/react.production.min';
import StyledButton from '../components/Button';

import {Card} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {gameAction} from '../module/gameSlice';
const StartPage = ({navigation}) => {
  const [firstPlayer, setFirstPlayer] = useState('player1');
  const dispatch = useDispatch();

  const handleSelectPlayer = name => {
    setFirstPlayer(name);
    dispatch(gameAction.changeStartPlayer(name));
  };

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
          flexDirection: 'row',
          width: '100%',
        }}>
        <Card
          style={[
            styles.styleCard,
            {
              backgroundColor: firstPlayer === 'player1' ? 'skyblue' : 'white',
            },
          ]}
          onPress={e => handleSelectPlayer('player1')}>
          <Card.Title title="그림1" />
          <Card.Content>
            <Card.Cover source={require('../img/emojimix.png')} />
          </Card.Content>
        </Card>
        <Card
          style={[
            styles.styleCard,
            {
              backgroundColor: firstPlayer === 'player2' ? 'skyblue' : 'white',
            },
          ]}
          onPress={e => handleSelectPlayer('player2')}>
          <Card.Title title="그림2" />
          <Card.Content>
            <Card.Cover source={require('../img/birthday.png')} />
          </Card.Content>
        </Card>
      </View>
      <View
        style={{
          alignItems: 'center',
          padding: 10,
        }}>
        <StyledButton
          color={'orange'}
          title={'시작하기'}
          onPress={() => navigation.navigate('GamePage')}
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
    fontSize: 20,
  },
  styleCard: {
    width: '50%',
    height: '100%',
  },
});

export default StartPage;

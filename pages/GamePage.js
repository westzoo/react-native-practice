import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import {StyleSheet, Text, View, Image} from 'react-native';

import {useEffect} from 'react/cjs/react.production.min';
import StyledButton from '../components/Button';

import {Card} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {gameAction, scheduleSelector} from '../module/gameSlice';

const GamePage = () => {
  const player = useSelector(scheduleSelector.scheduleInfo);

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
        <Text>{player.startPlayer}</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          padding: 10,
        }}></View>
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
    width: '80%',
  },
});

export default GamePage;

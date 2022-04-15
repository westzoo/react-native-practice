import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
const StyledButton = ({title, color, onPress}) => {
  const handlePressButton = () => {
    Alert.alert('버튼을 누릅니다');
  };

  return (
    <TouchableOpacity
      color={color}
      style={styles.styleButton}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  styleButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 300,
    borderRadius: 15,
    elevation: 3,
    padding: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 15,
    color: 'black',
  },
});

export default StyledButton;

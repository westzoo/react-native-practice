import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
const StyledButton = ({title, color, onPressIn}) => {
  return (
    <TouchableOpacity
      color={color}
      style={styles.styleButton}
      onPress={onPressIn}>
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
    zIndex: 1,
  },
  title: {
    fontSize: 15,
    color: 'black',
  },
});

export default React.memo(StyledButton);

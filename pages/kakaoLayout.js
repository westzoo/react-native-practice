import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import StyledButton from '../components/Button';

const KakaoLayout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.title}>
        <View style={styles.titleBox}>
          <Text style={styles.titleTxt}>
            손끝에서 펼쳐지는{'\n'}새로운 세상 {'\n'}엘리가
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image source={require('../img/Vector.png')} />
      </View>
      <View style={styles.footer}>
        <StyledButton
          title={'로그인'}
          onPressIn={() => {
            console.log('press');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(53,54,70)',
  },
  header: {
    width: '100%',
    height: '9%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    height: '18%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleBox: {
    width: '50%',
    paddingLeft: 20,
  },
  titleTxt: {
    fontWeight: '800',
    fontSize: 22,
    color: 'white',
    letterSpacing: 1,
    lineHeight: 28,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  footer: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default KakaoLayout;

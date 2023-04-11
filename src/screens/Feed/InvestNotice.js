import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MoneySend_Img from '../../../assets/images/money-send.png';
import Share_Img from '../../../assets/images/whiteShare.png';
// import { ScrollView } from 'react-native-gesture-handler';

export default () => {
  const navigation = useNavigation();
 
  return (
    <View style={styles.container}>
      <Image source={MoneySend_Img} style={styles.leftImg} />
      <Text style={styles.title}>Congratulations!</Text>
      <Text style={styles.des}>You earned 10% on the liftoff “Investing into Ethereum”. Now you can share this with your community.</Text>
      <TouchableOpacity style={styles.loginButton}>
        <Image source={Share_Img} style={styles.shareImg} />
        <Text style={styles.loginButtonText}>Share</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 66,
    paddingLeft: 24, 
    paddingRight: 24,
    paddingBottom: 22,
    // fontFamily: 'Montserrat'
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerview: {
    marginBottom: 76,
    flex: 1
  },
  topbar: {
    height: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  leftImg: {
    width: 63,
    height: 63,
    marginBottom: 16
  },
  shareImg: {
    width: 24,
    height: 24
  },
  title: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    lineHeight: 22,
    marginBottom: 16,
  },
  des: {
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 37,
    textAlign: 'center'
  },
  loginButton: {
    backgroundColor: '#627BBB',
    borderRadius: 5,
    width: 106,
    height: 32,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10
  },
  loginButtonText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Montserrat-Bold',
  },
  sendCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  sendCodeBtn: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#627BBB',
    borderRadius: 5,
    width: 86,
    alignItems: 'center'
  },
  sendCode: {
    color: '#365195',
    fontSize: 11,
    fontFamily: 'Montserrat-SemiBold',
  },
  phone: {
    color: '#627BBB',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  }
});
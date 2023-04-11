import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomSelect from '../../components/CustomSelect';
import { useNavigation } from '@react-navigation/native';
import BitCoinImage from '../../../assets/images/bitcoin.png';
import EthereumImage from '../../../assets/images/ethereum.png';
// import { ScrollView } from 'react-native-gesture-handler';
import Left_Img from "../../../assets/images/Left.png";

export default () => {
  const navigation = useNavigation();
 
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.topbar}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.topbar}>
            <Image source={Left_Img} style={styles.leftImg} />
            <Text  style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16, lineHeight: 19.5}}>Verification</Text>
            <Image source={Left_Img} style={styles.leftImgHidden} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Code will be sent to <Text style={styles.phone}>+1 2656 56 64</Text></Text>
            <TextInput
              style={styles.input}
              placeholder='Mobile verification code'
              onChange={() => {}}
            />
            <View style={styles.sendCodeContainer}>
              <TouchableOpacity style={styles.sendCodeBtn}>
                <Text style={styles.sendCode}>Send code</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Code will be sent to <Text style={styles.phone}>john@mail.com</Text></Text>
            <TextInput
              style={styles.input}
              placeholder='Email verification code'
              onChange={() => {}}
            />
            <View style={styles.sendCodeContainer}>
              <TouchableOpacity style={styles.sendCodeBtn}>
                <Text style={styles.sendCode}>Send code</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter Google verification code</Text>
            <TextInput
              style={styles.input}
              placeholder='Google verification code'
              onChange={() => {}}
            />
          </View>
        </View>
        
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('ListLiftoff2')}>
          <Text style={styles.loginButtonText}>Submit</Text>
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
    width: 24,
    height: 24
  },
  leftImgHidden: {
    width: 24,
    height: 24,
    opacity: 0
  },
  title: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: '#000000',
    alignSelf: 'flex-start',
    lineHeight: 22
  },
  content: {
    marginTop: 24
  },
  subGroup: {
    marginBottom: 20
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 10,
  },
  subContent: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
  inputContainer: {
    marginBottom: 4,
    width: '100%'
  },
  label: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#627BBB',
    paddingHorizontal: 8,
    borderRadius: 8,
    width: '100%',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
    height: 40,
    marginBottom: 6
  },
  loginButton: {
    backgroundColor: '#627BBB',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
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
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
            <Text  style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16, lineHeight: 19.5}}>Confirm order</Text>
            <Image source={Left_Img} style={styles.leftImgHidden} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.subtitle}>Address</Text> 
            <Text style={styles.subContent}>Address</Text> 
          </View>
          <View>
            <Text style={styles.subtitle}>Network</Text> 
            <Text style={styles.subContent}>ETH</Text> 
          </View>
          <View>
            <Text style={styles.subtitle}>Amount</Text> 
            <Text style={styles.subContent}>$850</Text> 
          </View>
        </View>
        
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Verification')}>
          <Text style={styles.loginButtonText}>Confirm</Text>
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
    marginBottom: 20,
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
});
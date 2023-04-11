import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import CustomInput from '../../components/CustomInput';
import Left_Img from "../../../assets/images/Left.png";

import { useNavigation } from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image source={Left_Img} style={styles.leftImg} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Forgot your password?</Text>
      <Text style={styles.description}>Enter your Email address</Text>
      <CustomInput label='Email' placeholder='Email' onChange={()=>{}} />
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('CheckEmail')}>
        <Text style={styles.loginButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 44,
    paddingLeft: 24,
    paddingRight: 24,
    // fontFamily: 'Montserrat'
  },
  topbar: {
    height: 24,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%'
  },
  leftImg: {
    width: 24,
    height: 24
  },
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    marginTop: 22,
    color: '#365195',
    alignSelf: 'flex-start'
  },
  description: {
    fontSize: 16,
    fontFamily: 'Montserrat-Light',
    marginTop: 19,
    marginBottom: 23,
    alignSelf: 'flex-start'
  },
  loginButton: {
    backgroundColor: '#627BBB',
    padding: 10,
    borderRadius: 5,
    marginTop: 21,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
});
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import CustomInput from '../../components/CustomInput';

import { useNavigation } from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
      </View>
      <Text style={styles.title}>Reset password</Text>
      <CustomInput label='New password' placeholder='New password' onChange={()=>{}} />
      <CustomInput label='Confirm password' placeholder='Confirm password' onChange={()=>{}} />
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.loginButtonText}>Reset password</Text>
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
    marginTop: 16
  },
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    marginTop: 24,
    marginBottom: 34,
    color: '#365195',
    alignSelf: 'flex-start'
  },
  loginButton: {
    backgroundColor: '#627BBB',
    padding: 10,
    borderRadius: 5,
    marginTop: 12,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
});
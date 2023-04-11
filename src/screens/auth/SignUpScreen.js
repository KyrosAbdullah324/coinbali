import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Facebook_Img from "../../../assets/images/Facebook.png";
import Google_Img from "../../../assets/images/Google.png";
import Twitter_Img from "../../../assets/images/Twitter.png";
import CustomInput from '../../components/CustomInput';

import { useNavigation } from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
      </View>
      <Text style={styles.title}>Create an account</Text>
      <View style={styles.nameContanier}>
        <View style={styles.halfContainer}>
          <CustomInput label='First name' placeholder='First name' onChange={()=>{}} />
        </View>
        <View style={styles.halfContainer}>
          <CustomInput label='Last name' placeholder='Last name' onChange={()=>{}} />
        </View>
      </View>
      <CustomInput label='Email' placeholder='Email' onChange={()=>{}} />
      <CustomInput label='Username' placeholder='Username' onChange={()=>{}} />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} secureTextEntry={true} />
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.policyText}>By continuing, you agree to our</Text>
        <TouchableOpacity>
          <Text style={styles.policyLink}>Terms of Service</Text>
        </TouchableOpacity>
        <Text style={styles.policyText}> and</Text>
        <TouchableOpacity>
          <Text style={styles.policyLink}>Privacy Policy</Text>
        </TouchableOpacity>
        <Text style={styles.policyText}>.</Text>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('VerifyEmail')}>
        <Text style={styles.loginButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.orLoginWithContainer}>
        <View style={styles.divider} />
        <Text style={styles.orLoginWith}>or sign up with</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Image source={Google_Img} style={styles.socialImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Image source={Facebook_Img} style={styles.socialImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Image source={Twitter_Img} style={styles.socialImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signUpLink}>Login</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 19,
    color: '#365195',
    alignSelf: 'flex-start'
  },
  nameContanier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  halfContainer: {
    width: '48%'
  },
  inputContainer: {
    marginBottom: 10,
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
    paddingVertical: 10,
    borderRadius: 8,
    width: '100%',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
    height: 40
  },
  policyText: {
    fontSize: 12,
    color: '#090A0A',
    fontFamily: 'Montserrat-SemiBold'
  },
  policyLink: {
    marginLeft: 5,
    color: '#627BBB',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
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
  orLoginWithContainer: {
    marginVertical: 23,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  divider: {
    borderBottomColor: 'rgba(98, 123, 187, 0.5)',
    borderBottomWidth: 1,
    height: 7.5,
    width: '34%',
  },
  orLoginWith: {
    marginHorizontal: 15,
    fontSize: 12,
    fontFamily: 'Montserrat-Light',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
    width: '100%',
  },
  socialLoginButton: {
    borderColor: '#1877F2',
    borderWidth: 1,
    padding: 14,
    borderRadius: 4,
    width: 52,
    height: 48,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  socialImg: {
    width: 20,
    height: 20
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  signUpText: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: 0.5,
  },
  signUpLink: {
    marginLeft: 5,
    color: '#627BBB',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    letterSpacing: 0.5,
  },
});
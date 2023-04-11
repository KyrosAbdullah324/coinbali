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
  const suboptions = [
    { label: 'BTC', thumbnail: BitCoinImage },
    { label: 'ETH', thumbnail: EthereumImage },
  ];
  const primaryoptions = [
    { label: 'Crypto', thumbnail: null },
    { label: 'NFT', thumbnail: null },
  ];
  const exchangeoptions = [];

  const [selectedPrimaryOption, setSelectedPrimaryOption] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);
  const [selectedExchangeOption, setSelectedExchangeOption] = useState(null);
  const handleSelect = (selectedOption) => {
    console.log('Selected option:', selectedOption);
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.topbar}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.topbar}>
            <Image source={Left_Img} style={styles.leftImg} />
            <Text  style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16, lineHeight: 19.5}}>Invest USD</Text>
            <Image source={Left_Img} style={styles.leftImgHidden} />
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>Invest USD to crypto adress</Text> 
        <CustomInput label='Address' placeholder='Address' onChange={()=>{}} />

        <CustomSelect label='Network' placeholder='Network'  optionList={suboptions} handleSelect={(option) => setSelectedSubOption(option)} selectedOption={selectedSubOption}/>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Amount</Text>
          <View style={{position: 'relative'}}>
            <Text style={styles.dollarLabel}>$</Text>
            <TextInput
              style={styles.input}
              placeholder='Amount'
              onChange={() => {}}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('ConfirmOrder')}>
          <Text style={styles.loginButtonText}>Invest</Text>
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
  subtitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    marginTop: 24,
    marginBottom: 17,
    color: '#000000',
    alignSelf: 'flex-start',
    lineHeight: 17
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
  dollarLabel: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    position: 'absolute',
    // fontFamily: 'Outfit',
    left: 10,
    top: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#627BBB',
    paddingHorizontal: 8,
    paddingLeft: 20,
    paddingRight: 10,
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
  },
  signUpText: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',
    fontFamily: 'Montserrat-SemiBold'
  },
  signUpLink: {
    marginLeft: 5,
    color: '#627BBB',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
  },
});
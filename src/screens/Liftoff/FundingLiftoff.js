import React from 'react';
import { View, Text, Switch , TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';
import { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomSelect from '../../components/CustomSelect';

import Left_Img from "../../../assets/images/Left.png";
import UploadImage from '../../../assets/images/upload.png';
import CheckedIcon from '../../../assets/images/checked.png';
import QuestionIcon from '../../../assets/images/question.png'
export default ({navigation}) => {
  const [checked, setChecked] = useState(false);

  return (
    <ScrollView
    showsVerticalScrollIndicator={false} style={styles.container}> 
        <View style={styles.containerview}>
            <View style={styles.topbar}>
                <TouchableOpacity onPress={() => navigation.navigate('TeamLiftoff')} style={styles.topbar}>
                <Image source={Left_Img} style={styles.leftImg} />
                <Text  style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16, lineHeight: 19.5 }}>Funding</Text>
                <Image source={Left_Img} style={styles.leftImgHidden} />
                </TouchableOpacity>
            </View>
            <View style={{position: "relative", flexDirection: "column", alignItems: "center"}}>
              <View style={{flexDirection: "row", justifyContent: "space-between",alignItems: "center", marginTop: 30, width: '100%', paddingHorizontal: 21, zIndex: 2}}>
                <Image source={CheckedIcon}/>
                <Image source={CheckedIcon}/>
                <Image source={CheckedIcon}/>
                <View style={{width: 23, height:23, backgroundColor: '#ABB6D2', borderRadius: 11.5, flexDirection:"row", alignItems:"center", justifyContent: "center"}}><Text style={{fontSize: 12, lineHeight: 15, color: '#FFFFFF'}}>4</Text></View>
              </View>
              <View style={{width: '80%', height:2, backgroundColor: "rgba(0, 0, 0, 0.1)", position: 'relative', top: -12, paddingHorizontal: 100}}></View>
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 7, width: '100%', paddingHorizontal: 15}}>
                <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 12, lineHeight: 15, color: '#67CB5E'}}>Basics</Text>
                <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 12, lineHeight: 15, color: '#67CB5E'}}>Content</Text>
                <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 12, lineHeight: 15, color: '#67CB5E'}}>Team</Text>
                <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 12, lineHeight: 15, color: '#000000'}}>Funding</Text>
            </View>
            <Text style={styles.title}>Funding</Text>
            <View style={{flexDirection: "row", alignItems: 'center'}}>
              <Text style={styles.subtitle}>1.Select a plan</Text>

              <Image source={QuestionIcon} style={{width: 14, height: 14, marginLeft: 7, marginRight: 7}} />
              <Text style={styles.subtitle1}>Learn more about plans</Text>
            </View>
            <CustomSelect label='Select a plan' placeholder='Select a plan'  optionList={[]} handleSelect={() => {}} selectedOption={null}/>

            <Text style={{...styles.subtitle}}>2.Funding goal</Text>
            <Text style={styles.description1}>How much money do you want to receive to complete the Liftoff?</Text>

            <CustomInput label='Funding goal' placeholder='$  Funding goal' onChange={()=>{}} />
            <CustomInput label='Margin Money ' placeholder='$  Margin Money ' onChange={()=>{}} />
            <View style={{flexDirection: "row", alignItems: 'center', marginBottom: 4}}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => setChecked(!checked)}
                color="#627BBB" // You can customize the border and fill color here
                uncheckedColor="#627BBB" // You can customize the unchecked border color here
              />
              <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 12, color: 'rgba(0, 0, 0, 0.7)'}}>I accept.</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center", width: '100%',}}>
              <Text style={{...styles.subtitle}}>3.Funds Recipient Verification</Text>
              <View style={{justifyContent:'center',alignItems:'center', flex:1,}}>
                <Text style={{...styles.description1, marginLeft: 10, flex:1, marginVertical: 23, alignSelf:'center'}} adjustsFontSizeToFit numberOfLines={1}>Not verified</Text>
              </View>
            </View>
            <Text style={{...styles.description1}}>You must be verified to launch the Liftoff.</Text>
            <TouchableOpacity style={styles.sendInvitationButton} onPress={() => setStep(4)}> 
                <Text style={styles.sendInvitationButtonText}>Verify ID</Text>
            </TouchableOpacity>
            <Text style={{...styles.subtitle}}>4.Duration</Text>
            <Text style={{...styles.description1}}>Set the length time of the Liftoff.</Text>
            <CustomInput label='Enter number of days ' placeholder='Enter number of days ' onChange={()=>{}} />
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('ListLiftoff1')}> 
                <Text style={styles.loginButtonText}>Save & Launch the Liftoff</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 44,
    paddingLeft: 24,
    paddingRight: 24,
    // fontFamily: 'Montserrat'
  },
  containerview: {
    marginBottom: 66
  },
  topbar: {
    height: 24,
    marginTop: 16,
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
  fullname: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#000000',
  },
  username: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Montserrat-Regular',
    color: '#000000',
    opacity: 0.8
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    marginTop: 20,
    fontFamily: 'Montserrat-Medium',
    color: '#000000',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Montserrat-Medium',
    color: '#000000',
    marginTop: 20,
    marginBottom: 20
  },
  subtitle1: {
    fontSize: 12,
    lineHeight: 15,
    fontFamily: 'Montserrat-SemiBold',
    color: '#627BBB',
    marginTop: 20,
    marginBottom: 20
  },
  description: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    marginTop: 20,
    color: '#000000',
    lineHeight: 17,
    alignSelf: 'flex-start'
  },
  description1: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 20,
    color: '#000000',
    lineHeight: 17,
    opacity: 0.7,
    alignSelf: 'flex-start'
  },
  uploadButton: {
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#365195',
    width: '100%',
    height: 192,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  loginButton: {
    backgroundColor: '#627BBB',
    padding: 10,
    borderRadius: 5,
    marginTop: 26,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },  
  sendInvitationButton: {
    backgroundColor: '#627BBB',
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 28,
    width: 120,
    alignItems: 'center',
  },
  sendInvitationButtonText: {
    color: 'white',
    fontSize: 13,
    lineHeight: 16,
    fontFamily: 'Montserrat-Bold',
  },
});
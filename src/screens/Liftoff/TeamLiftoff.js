import React from 'react';
import { View, Text, Switch , TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import { Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../components/CustomInput';
import CustomSelect from '../../components/CustomSelect';
import UploadImage from '../../../assets/images/upload.png';
import CheckedIcon from '../../../assets/images/checked.png';
import PlusIcon from '../../../assets/images/plus.png';
import Left_Img from "../../../assets/images/Left.png";
import Avatar from '../../../assets/images/avatar.png'
import ProfileIcon from '../../../assets/images/Profile.png'

export default ({navigation}) => {
  const [checked, setChecked] = useState(false);

  return (
    <ScrollView
    showsVerticalScrollIndicator={false} style={styles.container}> 
        <View style={styles.containerview}>
            <View style={styles.topbar}>
                <TouchableOpacity onPress={() => navigation.navigate('ContentLiftoff')} style={styles.topbar}>
                <Image source={Left_Img} style={styles.leftImg} />
                <Text  style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16, lineHeight: 19.5}}>Team</Text>
                <Image source={Left_Img} style={styles.leftImgHidden} />
                </TouchableOpacity>
            </View>
            <View style={{position: "relative", flexDirection: "column", alignItems: "center"}}>
              <View style={{flexDirection: "row", justifyContent: "space-between",alignItems: "center", marginTop: 30, width: '100%', paddingHorizontal: 21, zIndex: 2}}>
                <Image source={CheckedIcon}/>
                <Image source={CheckedIcon}/>
                <View style={{width: 23, height:23, backgroundColor: '#ABB6D2', borderRadius: 11.5, flexDirection:"row", alignItems:"center", justifyContent: "center"}}><Text style={{fontSize: 12, lineHeight: 15, color: '#FFFFFF'}}>3</Text></View>
                <View style={{width: 23, height:23, backgroundColor: '#CCD4E9', borderRadius: 11.5, flexDirection:"row", alignItems:"center", justifyContent: "center"}}><Text style={{fontSize: 12, lineHeight: 15, color: '#FFFFFF'}}>4</Text></View>
              </View>
              <View style={{width: '80%', height:2, backgroundColor: "rgba(0, 0, 0, 0.1)", position: 'relative', top: -12, paddingHorizontal: 100}}></View>
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 7, width: '100%', paddingHorizontal: 15}}>
                <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 12, lineHeight: 15, color: '#67CB5E'}}>Basics</Text>
                <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 12, lineHeight: 15, color: '#67CB5E'}}>Content</Text>
                <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 12, lineHeight: 15, color: '#000000'}}>Team</Text>
                <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 12, lineHeight: 15, color: '#000000', opacity: 0.5}}>Funding</Text>
            </View>
            <Text style={styles.title}>Team</Text>
            <Text style={styles.description}>If you are working in a team, send them an email invitation so we can confirm them. Each team member needs to have a Coinbàli account.</Text>
          
            <Text style={styles.subtitle}>1.Add New Team Member </Text>
            <CustomInput label='Team member Email' placeholder='Email' onChange={()=>{}}/>
            <View style={{flexDirection: "row", alignItems: 'center', height: 30, width: '100%'}}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => setChecked(!checked)}
                color="#627BBB" // You can customize the border and fill color here
                uncheckedColor="#627BBB" // You can customize the unchecked border color here
              />
              <Text style={{fontFamily: 'Montserrat-Regular', fontSize:12, lineHeight:15, color:'rgba(0, 0, 0, 0.7)', flex:1}}>Give this team member full rights to data and editing rights.</Text>
            </View>
            <TouchableOpacity style={styles.sendInvitationButton} onPress={() => {}}> 
                <Text style={styles.sendInvitationButtonText}>Send Invitation</Text>
            </TouchableOpacity>
            <Text style={{...styles.subtitle}}>2.Team owner</Text>
            <View style={{flexDirection: "row", marginBottom: 20, alignItems: "center"}}>
              <Image source={Avatar} style={{width: 50, height: 50}} />
              <View style={{marginLeft: 10, flexDirection: "column"}}>
                <Text style={styles.fullname}>Daniel Neal</Text>
                <Text style={styles.username}>@danielneal</Text>
              </View>
            </View>
            <CustomInput label='Role' placeholder='Project creator' onChange={()=>{}} />
      
             
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('FundingLiftoff')}> 
                <Text style={styles.loginButtonText}>Save & Continue</Text>
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
    marginBottom: 20
  },
  description: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    marginTop: 10,
    marginBottom: 20,
    color: '#000000',
    lineHeight: 17,
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
    marginTop: 43,
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
    borderRadius: 5,
    marginTop: 18,
    marginBottom: 38,
    width: 165,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendInvitationButtonText: {
    color: 'white',
    fontSize: 13,
    lineHeight: 16,
    letterSpacing:0.2,
    fontFamily: 'Montserrat-Bold',
  },
});
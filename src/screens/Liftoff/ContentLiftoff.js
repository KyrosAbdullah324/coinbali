import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UploadImage from '../../../assets/images/upload.png';
import Left_Img from "../../../assets/images/Left.png";
import CheckedIcon from '../../../assets/images/checked.png';
import PlusIcon from '../../../assets/images/plus.png';
import CustomInput from '../../components/CustomInput';
import CustomSelect from '../../components/CustomSelect';
export default ({navigation}) => {

  return (
    <ScrollView
    showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.containerview}>
            <View style={styles.topbar}>
                <TouchableOpacity onPress={() => navigation.navigate('BasicLiftoff')} style={styles.topbar}>
                <Image source={Left_Img} style={styles.leftImg} />
                <Text  style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16, lineHeight: 19.5}}>Content</Text>
                <Image source={Left_Img} style={styles.leftImgHidden} />
                </TouchableOpacity>
            </View>
            <View style={{position: "relative", flexDirection: "column", alignItems: "center"}}>
              <View style={{flexDirection: "row", justifyContent: "space-between",alignItems: "center", marginTop: 30, width: '100%', paddingHorizontal: 21, zIndex: 2}}>
                  <Image source={CheckedIcon}/>
                  <View style={{width: 23, height:23, backgroundColor: '#ABB6D2', borderRadius: 11.5, flexDirection:"row", alignItems:"center", justifyContent: "center"}}><Text style={{fontSize: 12, lineHeight: 15, color: '#FFFFFF'}}>2</Text></View>
                  <View style={{width: 23, height:23, backgroundColor: '#CCD4E9', borderRadius: 11.5, flexDirection:"row", alignItems:"center", justifyContent: "center"}}><Text style={{fontSize: 12, lineHeight: 15, color: '#FFFFFF'}}>3</Text></View>
                  <View style={{width: 23, height:23, backgroundColor: '#CCD4E9', borderRadius: 11.5, flexDirection:"row", alignItems:"center", justifyContent: "center"}}><Text style={{fontSize: 12, lineHeight: 15, color: '#FFFFFF'}}>4</Text></View>
              </View>
              <View style={{width: '80%', height:2, backgroundColor: "rgba(0, 0, 0, 0.1)", position: 'relative', top: -12, paddingHorizontal: 100}}></View>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 7, width: '100%', paddingHorizontal: 15}}>
                <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 12, lineHeight: 15, color: '#67CB5E'}}>Basics</Text>
                <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 12, lineHeight: 15, color: '#000000'}}>Content</Text>
                <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 12, lineHeight: 15, color: '#000000', opacity: 0.5}}>Team</Text>
                <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 12, lineHeight: 15, color: '#000000', opacity: 0.5}}>Funding</Text>
            </View>
            <Text style={styles.title}>Introduce your Liftoff. </Text>
            <Text style={styles.subtitle}>1.Story </Text>
            <Text style={styles.description}>Provide the description what you're raising funds to do. Tell more about your goal and details that will motivate backers. </Text>
            <CustomInput label='Description of your Liftoff' placeholder='Description of your Liftoff' onChange={()=>{}} height={110} multi={true}/>
            <Text style={{...styles.subtitle, marginTop: 20}}>2.FAQ</Text>
            <Text style={styles.description}>This section should provide the most common questions that backers are looking for reviewing your Liftoff.</Text>
            <CustomInput label='Question' placeholder='Question' onChange={()=>{}} />
            <CustomInput label='Answer' placeholder='Answer' onChange={()=>{}} />
            <View style={{flexDirection: 'row'}}>
                <Image source={PlusIcon}/>
                <Text style={{fontFamily: 'Montserrat-Medium', fontSize:16, lineHeight: 19.5, color: '#000000', marginLeft: 10}}>Add question</Text>
            </View>
            
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('TeamLiftoff')}> 
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
  title: {
    fontSize: 16,
    lineHeight: 20,
    marginTop: 20,
    color: '#000000',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 20,
    marginTop: 20,
    fontFamily: 'Montserrat-Medium',
    color: '#000000',
  },
  description: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    marginTop: 10,
    color: '#000000',
    opacity: 0.7,
    lineHeight: 17,
    marginBottom: 20,
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
});
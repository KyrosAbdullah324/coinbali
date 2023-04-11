import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Left_Img from "../../../assets/images/Left.png";
import UploadImage from '../../../assets/images/upload.png';
import CustomSelect from '../../components/CustomSelect';
import CustomInput from '../../components/CustomInput';
export default ({navigation}) => {

  return (
    <ScrollView
    showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.containerview}>
            <View style={styles.topbar}>
                <TouchableOpacity onPress={() => navigation.navigate('CreateNewLiftoff')} style={styles.topbar}>
                <Image source={Left_Img} style={styles.leftImg} />
                <Text  style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16, lineHeight: 19.5}}>Basics</Text>
                <Image source={Left_Img} style={styles.leftImgHidden} />
                </TouchableOpacity>
            </View>
            <View style={{position: "relative", flexDirection: "column", alignItems: "center"}}>
            <View style={{flexDirection: "row", justifyContent: "space-between",alignItems: "center", marginTop: 30, width: '100%', paddingHorizontal: 21, zIndex: 2}}>
                <View style={{width: 23, height:23, backgroundColor: '#ABB6D2', borderRadius: 11.5, flexDirection:"row", alignItems:"center", justifyContent: "center"}}><Text style={{fontSize: 12, lineHeight: 15, color: '#FFFFFF'}}>1</Text></View> 
                <View style={{width: 23, height:23, backgroundColor: '#CCD4E9', borderRadius: 11.5, flexDirection:"row", alignItems:"center", justifyContent: "center"}}><Text style={{fontSize: 12, lineHeight: 15, color: '#FFFFFF'}}>2</Text></View>
                <View style={{width: 23, height:23, backgroundColor: '#CCD4E9', borderRadius: 11.5, flexDirection:"row", alignItems:"center", justifyContent: "center"}}><Text style={{fontSize: 12, lineHeight: 15, color: '#FFFFFF'}}>3</Text></View>
                <View style={{width: 23, height:23, backgroundColor: '#CCD4E9', borderRadius: 11.5, flexDirection:"row", alignItems:"center", justifyContent: "center"}}><Text style={{fontSize: 12, lineHeight: 15, color: '#FFFFFF'}}>4</Text></View>
            </View>
            <View style={{width: '80%', height:2, backgroundColor: "rgba(0, 0, 0, 0.1)", position: 'relative', top: -12, paddingHorizontal: 100}}></View>
            </View> 
       

            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 7, width: '100%', paddingHorizontal: 15}}>
                <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 12, lineHeight: 15, color: '#000000'}}>Basics</Text>
                <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 12, lineHeight: 15, color: '#000000', opacity: 0.5}}>Content</Text>
                <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 12, lineHeight: 15, color: '#000000', opacity: 0.5}}>Team</Text>
                <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 12, lineHeight: 15, color: '#000000', opacity: 0.5}}>Funding</Text>
            </View>
            <Text style={styles.title}>Introduce your Liftoff. </Text>
            <Text style={styles.subtitle}>1.Liftoff title </Text>
            <Text style={styles.description}>Welcome to Coinbàli! We send an email to john12@mail.com to confirm your email address. </Text>
            <CustomInput label='Title' placeholder='Title' onChange={()=>{}} />
            <CustomInput label='Subtitle' placeholder='Subtitle' onChange={()=>{}} lineCount={2} multi={true} height={60}/>
            <Text style={{...styles.subtitle, marginTop: 20}}>2.Liftoff image</Text>
            <Text style={styles.description}>Upload an image that represents your Liftoff. </Text>
            <View style={styles.uploadButton}>
                <Image source={UploadImage} />
            </View>
            <Text style={styles.subtitle}>3.Location</Text>
            <Text style={styles.description}>Select the country where your project is based.</Text>
            <CustomSelect label='Country' placeholder='Country'  optionList={[]} handleSelect={() => {}} selectedOption={null}/>
            <Text style={styles.subtitle}>4.Category</Text>
            <Text style={styles.description}>Select a category and subcategory to help backers find your project.</Text>
            <CustomSelect label='Category' placeholder='Category'  optionList={[]} handleSelect={() => {}} selectedOption={null}/>
            <CustomSelect label='Subcategory' placeholder='Subcategory'  optionList={[]} handleSelect={() => {}} selectedOption={null}/>
            
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('ContentLiftoff')}>
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
    flexDirection: 'row',
    marginTop: 16,
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
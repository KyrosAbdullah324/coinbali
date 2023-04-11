import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Gobackwidget from '../../components/CustomGobackWidget'
import Left_Img from "../../../assets/images/Left.png";
import Avatar1_Img from "../../../assets/images/Avatar1.png";
import Avatar2_Img from "../../../assets/images/Avatar2.png";
import Avatar3_Img from "../../../assets/images/Avatar3.png";
import Avatar4_Img from "../../../assets/images/Avatar4.png";
import Avatar5_Img from "../../../assets/images/Avatar5.png";
const sampleData = [{
  name: "Michael Hines",
  id: "michaelhines",
  isFollow: false,
  image: Avatar1_Img
},
{
  name: "Frank Miller",
  id: "@frankmiller",
  isFollow: true,
  image: Avatar2_Img
},
{
  name: "Ethan Nagata",
  id: "@ethanagata",
  isFollow: true,
  image: Avatar3_Img
},
{
  name: "Alisha Collier",
  id: "@alishacollier",
  isFollow: false,
  image: Avatar1_Img
},
{
  name: "Leroy Long",
  id: "@leroylong",
  isFollow: false,
  image: Avatar3_Img
},
{
  name: "George Bocanegra",
  id: "@gebocanegra",
  isFollow: true,
  image: Avatar4_Img
},
{
  name: "Lukas Faust",
  id: "@lukasfaust",
  isFollow: false,
  image: Avatar3_Img
},
{
  name: "Ethan Nagata",
  id: "@ethanagata",
  isFollow: false,
  image: Avatar5_Img
}];
const Item = ({ image, name, id }) => {
  return (
    <View style={styles.interestUser}>
      <Image source={image} style={styles.interestAvatar} />
      <View style={styles.interestUserInfo}>
        <Text style={styles.interestUserName}>{name}</Text>
        <Text style={styles.interestUserId}>{id}</Text>
      </View>
    </View>
  )
}
export default () => {

  return (
    <View style={styles.container}>
      <Gobackwidget Title = "People who liked it"/>
      <View style={styles.interestUserGroup}>
        {
          (sampleData.length !== 0) ?
            sampleData.map(({ name, id, image }, index) =>
              (<Item key={index} name={name} id={id} image={image}></Item>)
            ) :
            (<Text>Empty</Text>)
        }
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
  interestUserGroup: {
    marginTop: 38,
    width: '100%'
  },
  interestUser: {

    flexDirection: 'row',
    marginBottom: 20
  },
  interestAvatar: {
    width: 40,
    height: 40
  },
  interestUserInfo: {
    marginLeft: 10
  },
  interestUserName: {
    marginTop: 3,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  interestUserId: {
    marginTop: 2,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0, 0, 0, 0.8)'
  },

});
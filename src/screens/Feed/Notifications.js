import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';

import { useIsFocused, useNavigation } from '@react-navigation/native';
import Left_Img from "../../../assets/images/Left.png";
import Setting_Img from "../../../assets/images/settings.png";

import Avatar2_Img from "../../../assets/images/Avatar2.png";
import Avatar3_Img from "../../../assets/images/Avatar3.png";
import Avatar5_Img from "../../../assets/images/Avatar5.png";

const Gobackwidget = ({ Title = "" }) => {
  const navigation = useNavigation();
  return (
    <View style={stylesGoback.topbar}>
      <Text style={stylesGoback.title}>
        {Title}
      </Text>
      <TouchableOpacity style={stylesGoback.backBtn} onPress={() => navigation.goBack()}>
        <Image source={Left_Img} style={stylesGoback.leftImg} />
      </TouchableOpacity>
      <TouchableOpacity style={stylesGoback.settingBtn} onPress={() => navigation.navigate("Settings")}>
        <Image source={Setting_Img} />
      </TouchableOpacity>
    </View>
  );
}
const Item1 = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("InvestNotice")}>
      <View style={styles.User}>
        <View style={styles.UserInfo}>
          <Text style={styles.eventAction}>
            <Text style={styles.eventActionBold} >Congratulations! </Text>
            You earned 10% on the liftoff “Investing into Ethereum”.
          </Text>
          <Text style={styles.Date}>1 day ago</Text>
        </View>
      </View >
    </TouchableOpacity>
  )
}
const Item = ({ image, name, date }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => { navigation.navigate("Following") }}>
      <View style={styles.User}>
        <Image source={image} style={styles.Avatar} />
        <View style={styles.UserInfo}>
          <View style={styles.UserInfoText}>
            <Text style={styles.UserName}>{name}</Text>
            <Text style={styles.UserAction}>is following you now.</Text>
          </View>
          <Text style={styles.Date}>{date} day ago</Text>
        </View>
      </View>
    </TouchableOpacity>)
}
const sampleData = [{
  name: "Michael Hines",
  image: Avatar3_Img,
  date: "1",
}, {
  name: "Alisha Collier",
  image: Avatar5_Img,
  date: "1",
},
{
  name: "Lukas Faust",
  image: Avatar2_Img,
  date: "1",
}]
export default () => {
  return (
    <View style={styles.container}>
      <Gobackwidget Title='Notifications' />
      <ScrollView
        showsVerticalScrollIndicator={false} style={styles.scroll}>
        {
          (sampleData.length !== 0) ?
            sampleData.map(({ name, image, date }, index) =>
              (<Item key={index} name={name} image={image} date={date} />)
            ) :
            (<Text>Empty</Text>)
        }
        <Item1 />
      </ScrollView>
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
  scroll: {
    marginTop: 33,
    width: '100%'
  },
  User: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)'
  },
  Avatar: {
    width: 32,
    height: 32,
    marginRight: 10
  },
  UserInfo: {
  },
  UserInfoText: {
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  UserName: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  UserAction: {
    marginLeft: 4,
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Montserrat-Regular',
  },
  eventActionBold: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 600,
    fontFamily: 'Montserrat-SemiBold',
  },
  eventAction: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 400,
    fontFamily: 'Montserrat-Regular',
  },
  Date: {
    marginTop: 4,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0, 0, 0, 0.8)'
  },
});
const stylesGoback = StyleSheet.create({
  topbar: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    width: '100%'
  },
  title: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: 'Montserrat-SemiBold'
  },
  backBtn: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -13 }],
    left: 0
  },
  settingBtn: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -13 }],
    right: 0
  },
  leftImg: {
    width: 24,
    height: 24
  }
})
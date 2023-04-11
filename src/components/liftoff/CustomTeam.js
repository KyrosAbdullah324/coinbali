import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ProfileIcon from '../../../assets/images/Profile.png'
import Like_Img from "../../../assets/images/Like.png";
import Comment_Img from "../../../assets/images/Comment.png";

export default ({usericon, fullname, username, role}) => {
    return (
        <View style={styles.container}>
             <View style={{flexDirection: "row", marginBottom: 10, alignItems: "flex-start"}}>
              <Image source={usericon} style={{width: 32, height: 32}} />
              <View style={{marginLeft: 10, flexDirection: "column", gap: 4}}>
                <Text style={styles.fullname}>{fullname}</Text>
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.role}>{role}</Text>
                
              </View>
            </View>
          
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
    },
    timetxt: {
        fontSize: 10,
        lineHeight: 12,
        marginTop: 2,
        color: 'rgba(0, 0, 0, 0.5)'
    },
    title: {
      fontSize: 16,
      lineHeight: 19.5,
      fontFamily: 'Montserrat-Medium',
      marginBottom: 20,
    },
    desp: {
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'Montserrat-Regular',
        marginBottom: 0,
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
    role: {
        fontSize: 14,
        lineHeight: 17,
        fontFamily: 'Montserrat-Regular',
        color: '#000000',
    },
  });
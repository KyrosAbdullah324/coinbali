import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Avatar5 from '../../../assets/images/Avatar5.png'
import Like_Img from "../../../assets/images/Like.png";
import Comment_Img from "../../../assets/images/Comment.png";

export default () => {
    const title = "Only 12 days left before the liftoff ends!";
    const fullname = "Ethan Nagata";
    const username = "@ethanagata";
    const likesCount = 21; 
    const commentsCount = 10;
    const content = `What are the risks?`
    return (
        <View style={styles.container}>
             <View style={{flexDirection: "row", marginBottom: 20, alignItems: "center"}}>
              <Image source={Avatar5} style={{width: 32, height: 32}} />
              <View style={{marginLeft: 10, flexDirection: "column"}}>
                <View style={{gap: 13, flexDirection: "row"}}>
                <Text style={styles.fullname}>{fullname}</Text>
                <Text style={styles.timetxt}>an hour ago</Text>
                </View>
                <Text style={styles.username}>{username}</Text>
              </View>
            </View>
            <Text style={styles.desp}>{content}</Text>
            <View style={styles.articleIndicateContainer}>
                <View style={styles.articleIndicateGroup}>
                    <Image source={Like_Img} style={styles.articleIndicateIcon} />
                    <Text style={styles.articleIndicateText}>{likesCount} Likes</Text>
                </View>
                <View style={styles.articleIndicateGroup}>
                    <Image source={Comment_Img} style={styles.articleIndicateIcon} />
                    <Text style={styles.articleIndicateText}>{commentsCount} Comments</Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
       marginTop: 20,
       marginBottom: 14
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
        marginBottom: 15,
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
    articleIndicateContainer: {
        flexDirection: 'row',
      },
      articleIndicateGroup: {
        flexDirection: 'row',
        marginRight: 30,
        alignItems: 'center'
      },
      articleIndicateIcon: {
        width: 24,
        height: 24,
      },
      articleIndicateText: {
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
        color: 'rgba(0, 0, 0, 0.6)',
        marginLeft: 4
      },
  });
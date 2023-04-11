import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ProfileIcon from '../../../assets/images/Profile.png'
import Like_Img from "../../../assets/images/Like.png";
import Comment_Img from "../../../assets/images/Comment.png";

export default () => {
    const title = "Only 12 days left before the liftoff ends!";
    const fullname = "Ethan Nagata";
    const username = "@ethanagata";
    const likesCount = 21;
    const commentsCount = 10;
    const content = `Hi, everyone!
    
I wanted to share that only 12 days left the liftoff ends. The liftoff ends on November 20.
We hit almost half the amount. Thanks to all bakers who take part. 
    `
    return (
        <View style={styles.container}>
            <Text style={styles.timetxt}>Nov 7, 2022 12:15</Text>
             <View style={{flexDirection: "row", marginBottom: 20, alignItems: "center"}}>
              <Image source={ProfileIcon} style={{width: 40, height: 40}} />
              <View style={{marginLeft: 10, flexDirection: "column"}}>
                <Text style={styles.fullname}>{fullname}</Text>
                <Text style={styles.username}>{username}</Text>
              </View>
            </View>
            <Text style={styles.title}>{title}</Text>
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
       marginBottom: 14
    },
    timetxt: {
        fontSize: 10,
        lineHeight: 12,
        marginBottom: 9,
        color: 'rgba(0, 0, 0, 0.5)'
    },
    title: {
      fontSize: 16,
      lineHeight: 19.5,
      fontFamily: 'Montserrat-Medium',
      marginBottom: 20,
    },
    desp: {
        fontSize: 12,
        lineHeight: 15,
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
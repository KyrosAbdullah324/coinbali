import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Avatar1_Img from "../../assets/images/Avatar1.png";
import Article_Img from "../../assets/images/article1.png";
import Like_Img from "../../assets/images/Like.png";
import Comment_Img from "../../assets/images/Comment.png";
import Share_Img from "../../assets/images/Share.png";
import { useNavigation } from '@react-navigation/native';

export default ({ articleData }) => {
  const navigation = useNavigation();

  return (
    <View>
        <View style={[styles.userInfo, {justifyContent: 'space-between'}]}>
          <View style={styles.userInfo}>
            <Image source={articleData.avatar} style={styles.articleAvatar} />
            <View style={styles.userNameContainer}>
              <View style={styles.nameCreated}>
                <Text style={styles.articleName}>{articleData.name}</Text>
                <Text style={styles.articleCreatedAt}>{articleData.createdAt}</Text>
              </View>
              <Text style={styles.articleUserId}>{articleData.userId}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.articleContent}>{articleData.content}</Text>
        {
          articleData.achieve !== '' &&
          <Image source={articleData.achieve} style={styles.achieve} />
        }
      <View style={styles.articleIndicateContainer}>
        <View style={styles.articleIndicateGroup}>
          <Image source={Like_Img} style={styles.articleIndicateIcon} />
          {/* <TouchableOpacity onPress={() => navigation.navigate('SignUp')}> */}
          <Text style={styles.articleIndicateText}>{articleData.likes} Likes</Text>
          {/* </TouchableOpacity> */}
        </View>
        <View style={styles.articleIndicateGroup}>
          <Image source={Comment_Img} style={styles.articleIndicateIcon} />
          {/* <TouchableOpacity onPress={() => navigation.navigate('SignUp')}> */}
          <Text style={styles.articleIndicateText}>{articleData.comments} Replies</Text>
          {/* </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userInfo: {
    flexDirection: 'row'
  },
  articleAvatar: {
    width: 32,
    height: 32
  },
  userNameContainer: {
    marginLeft: 10
  },
  nameCreated: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  articleName: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold'
  },
  articleUserId: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0, 0, 0, 0.8)'
  },
  articleCreatedAt: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0, 0, 0, 0.4)',
    marginLeft: 10
  },
  articleContent: {
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0, 0, 0, 0.8)',
    marginTop: 8
  },
  achieve: {
    borderWidth: 1,
    borderColor: 'rgba(98, 123, 187, 0.3)',
    borderRadius: 8,
    flexGrow: 1,
    marginTop: 8,
    width:'100%'
  },
  articleIndicateContainer: {
    flexDirection: 'row',
    marginTop: 8
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
  }
});
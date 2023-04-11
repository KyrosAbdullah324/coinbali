import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Comment from '../../components/Comment';
import Gobackwidget from '../../components/CustomGobackWidget'
import Avatar1_Img from '../../../assets/images/Avatar1.png'
import Avatar2_Img from '../../../assets/images/Avatar2.png'
import Avatar3_Img from '../../../assets/images/Avatar3.png'
import Avatar4_Img from '../../../assets/images/Avatar4.png'
import Avatar5_Img from '../../../assets/images/Avatar5.png'
import Article_Img1 from "../../../assets/images/article1.png";
import Article_Img2 from "../../../assets/images/article2.png";
const PostsRoute = () => (
  <ScrollView
    showsVerticalScrollIndicator={false} 
  style={styles.scene} >
    <View style={styles.article}>
      <Comment
        articleData={{
          name: 'Ethan Nagata',
          userId: '@ethanagata',
          createdAt: '1 day ago',
          content: 'I recently got my hands on some useful information and I thought it was worth sharing over here in the platform. It shows a large percentage of assets divided into house, stocks, savings, car and bonds.',
          achieve: Article_Img1,
          likes: '21',
          comments: '10',
          avatar: Avatar2_Img
        }}
      />
    </View>
    <View style={styles.article}>
      <View style={{ flexDirection: "row", marginBottom: 8, alignItems: "center" }}>
        <Image source={Avatar3_Img} style={{ width: 32, height: 32 }} />
        <View style={{ marginLeft: 10, flexDirection: "column" }}>
          <Text style={styles.fullname}>Daniel Neal</Text>
          <Text style={styles.username}>@danielneal</Text>
        </View>
      </View>
      <TextInput style={{ ...styles.inputcomment }} placeholder={"Share a post with everyone"} onChange={e => onChange(e.target.value)} />
    </View>
    <View style={styles.article}>
      <Comment
        articleData={{
          name: 'Alisha Collier',
          userId: '@alishacollier',
          createdAt: '1 day ago',
          content: 'Thanks',
          achieve: '',
          likes: '21',
          comments: '10',
          avatar: Avatar4_Img
        }}
      />
    </View>
    <View style={styles.article}>
      <Comment
        articleData={{
          name: 'Alisha Collier',
          userId: '@alishacollier',
          createdAt: '1 day ago',
          content: 'Thanks',
          achieve: '',
          likes: '21',
          comments: '10',
          avatar: Avatar5_Img
        }}
      />
    </View>
    <View style={styles.article}>
      <Comment
        articleData={{
          name: 'Alisha Collier',
          userId: '@alishacollier',
          createdAt: '1 day ago',
          content: 'Your analysis is good..',
          achieve: '',
          likes: '21',
          comments: '10',
          avatar: Avatar2_Img
        }}
      />
    </View>
    <TouchableOpacity onPress={() => {}}>
      <Text style={styles.show}>
        Show more
      </Text>
    </TouchableOpacity>
  </ScrollView>
);
export default () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Gobackwidget Title='Comments' />
      <PostsRoute />
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
  controlRightWrap: {
    flexDirection: 'row'
  },
  notifications: {
    marginLeft: 14,
  },
  watchList: {
    marginLeft: 14,
    // flex:1
  },
  scene: {
    flex: 1,
    marginTop: 18
  },
  article: {
    marginBottom: 18
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
  inputcomment: {
    backgroundColor: "#EAECF1",
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 6,
    width: "100%",
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.2,
    height: 36,
    color: "rgba(0, 0, 0, 0.3)",
    fontFamily: 'Montserrat-Regular'
  },
  show: {
    color: '#365195',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold'
  }
  //--
});
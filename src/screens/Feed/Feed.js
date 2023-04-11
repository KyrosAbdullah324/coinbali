import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import Search_Img from '../../../assets/images/search.png';
import WatchList_Img from '../../../assets/images/watchlist.png'
import Notification_Img from '../../../assets/images/notifications.png'
import Avatar1_Img from '../../../assets/images/Avatar1.png'
import Avatar2_Img from '../../../assets/images/Avatar2.png'
import Avatar3_Img from '../../../assets/images/Avatar3.png'
import Avatar4_Img from '../../../assets/images/Avatar4.png'
import Avatar5_Img from '../../../assets/images/Avatar5.png'
import Article_Img1 from "../../../assets/images/article1.png";
import Article_Img2 from "../../../assets/images/article2.png";

import Article from '../../components/Article';

const PostsRoute = () => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    style={styles.scene} >
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
      <Article
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
      <Article
        articleData={{
          name: 'Ethan Nagata',
          userId: '@ethanagata',
          createdAt: '1 day ago',
          content: 'Crypto is going to have its best year come 2023...',
          achieve: '',
          likes: '21',
          comments: '10',
          avatar: Avatar4_Img
        }}
      />
    </View>
    <View style={styles.article}>
      <Article
        articleData={{
          name: 'Ethan Nagata',
          userId: '@ethanagata',
          createdAt: '1 day ago',
          content: 'December is usually a good month for stocks, but this year December 2022 is one of the worst December ever for the S&P 500',
          achieve: Article_Img2,
          likes: '21',
          comments: '10',
          avatar: Avatar5_Img
        }}
      />
    </View>
  </ScrollView>
);
const Search = () => {
  const navigation = useNavigation();
  return (
    <View style={stylesSearchWidget.controlWrap}>
      <View style={stylesSearchWidget.inputWarp}>
        <TextInput keyboardType='default' style={stylesSearchWidget.searchInput} placeholder="Search" />
        <Image style={stylesSearchWidget.inputSearchIcon} source={Search_Img} resizeMode='cover' />
      </View>
      <View style={styles.controlRightWrap}>
        <View style={styles.watchList}>
          <TouchableOpacity onPress={() => navigation.navigate('WatchList')}>
            <Image source={WatchList_Img} resizeMode='cover' />
          </TouchableOpacity>
        </View>
        <View style={styles.notifications}>
          <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <Image source={Notification_Img} resizeMode='cover' />
          </TouchableOpacity>
        </View>
      </View>
    </View>)
}
export default () => {
  return (
    <View style={styles.container}>
      <Search />
      <PostsRoute />
    </View>
  );
}
const stylesSearchWidget = StyleSheet.create({
  controlWrap: {
    marginTop: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },

  inputWarp: {
    flex: 1,
    position: 'relative'
  },
  searchInput: {
    borderWidth: 2, borderColor: '#627bbb66', borderRadius: 8,
    fontSize: 14,
    lineHeight: 16,
    paddingVertical: 3,
    paddingRight: 10,
    paddingLeft: 40,
    fontFamily: 'Montserrat-Regular',
    // minWidth: 50,
  },
  searchInputFocused: {
  },
  inputSearchIcon: {
    position: 'absolute',
    top: 12,
    left: 13,
  },
})
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
    fontFamily: 'Montserrat-Regular',
  },
});
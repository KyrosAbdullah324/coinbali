import React, {useState} from 'react';
import { ImageBackground, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import HeaderCover_Img from "../../../assets/images/HeaderCover.png";
import Left_Img from "../../../assets/images/Left.png";
import Avatar1_Img from "../../../assets/images/Avatar1.png";
import Location_Img from "../../../assets/images/Location.png";
import Msg_Img from "../../../assets/images/msg.png";

import { useNavigation } from '@react-navigation/native';

import { TabView, SceneMap } from 'react-native-tab-view';
import Article from '../../components/Article';

const PostsRoute = () => (
  <ScrollView
    showsVerticalScrollIndicator={false} style={styles.scene} >
    <View style={styles.article}>
      <Article 
        articleData={{
          name: 'Ethan Nagata',
          userId: '@ethanagata',
          createdAt: '1 day ago',
          content: 'I recently got my hands on some useful information and I thought it was worth sharing over here in the platform. It shows a large percentage of assets divided into house, stocks, savings, car and bonds.',
          achieve: 'article1.png',
          likes: '21',
          comments: '10',
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
          achieve: 'article2.png',
          likes: '21',
          comments: '10',
        }}
      />
    </View>
  </ScrollView>
);

const AboutRoute = () => (
  <ScrollView
    showsVerticalScrollIndicator={false} style={styles.scene} >
    <View style={styles.aboutGroup}>
      <Text style={styles.aboutTitle}>Bio</Text>
      <Text style={styles.aboutContent}>I am a student of Computer Engineering, currently in my 4th and final year, I am single and searching for someone special, I have been interested in finance and will love the opportunity to learn and grow with this platform...<Text style={styles.showMore}>Show more</Text></Text>
    </View>
    <View style={styles.aboutGroup}>
      <Text style={styles.aboutTitle}>Education</Text>
      <Text style={styles.aboutContent}>Bachelor, Northwestern University</Text>
      <Text style={styles.aboutPeriod}>2018 - Present</Text>
    </View>
    <View style={styles.aboutGroup}>
      <Text style={styles.aboutTitle}>Work experience</Text>
      <Text style={styles.aboutContent}>Financial Consultant</Text>
      <Text style={styles.aboutPeriod}>2021 - 2021</Text>
      <Text style={[styles.aboutContent, {marginTop: 10}]}>Financial Training</Text>
      <Text style={styles.aboutPeriod}>2021 - 2021</Text>
    </View>
    <View style={styles.aboutGroup}>
      <Text style={styles.aboutTitle}>Skills</Text>
      <View style={styles.skillGroup}>
        <Text style={styles.skillText}>financial analytics</Text>
        <Text style={styles.skillText}>mapping</Text>
        <Text style={styles.skillText}>Python</Text>
        <Text style={styles.skillText}>c++</Text>
        <Text style={styles.skillText}>Java</Text>
      </View>
    </View>
    <View style={[styles.aboutGroup, {marginBottom: 10}]}>
      <Text style={styles.aboutTitle}>Interests</Text>
      <View style={styles.interestUserGroup}>
        <View style={styles.interestUser}>
          <Image source={Avatar1_Img} style={styles.interestAvatar} />
          <View style={styles.interestUserInfo}>
            <Text style={styles.interestUserName}>James Peterson</Text>
            <Text style={styles.interestUserId}>@jamespererson</Text>
          </View>
        </View>
        <View style={styles.interestUser}>
          <Image source={Avatar1_Img} style={styles.interestAvatar} />
          <View style={styles.interestUserInfo}>
            <Text style={styles.interestUserName}>Alisha Collier</Text>
            <Text style={styles.interestUserId}>@alishacollier</Text>
          </View>
        </View>
        <View style={styles.interestUser}>
          <Image source={Avatar1_Img} style={styles.interestAvatar} />
          <View style={styles.interestUserInfo}>
            <Text style={styles.interestUserName}>Frank Miller</Text>
            <Text style={styles.interestUserId}>@frankmiller</Text>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
);

const renderTabBar = props => (
<View style={styles.tabBar}>
  {props.navigationState.routes.map((route, index) => {
    const isFocused = props.navigationState.index === index;
    const onPress = () => {
      props.jumpTo(route.key);
    };

    return (
      <TouchableOpacity
        key={route.key}
        style={[styles.tab, { borderBottomColor: isFocused ? '#627BBB' : 'white' }]}
        onPress={onPress}
      >
        <Text style={styles.tabText}>{route.title}</Text>
      </TouchableOpacity>
    );
  })}
</View>
);

export default () => {
  const navigation = useNavigation();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'Posts', title: 'Posts' },
    { key: 'About', title: 'About' },
  ]);

  const renderScene = SceneMap({
    Posts: PostsRoute,
    About: AboutRoute,
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={HeaderCover_Img} style={styles.topbar} resizeMode='cover'>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Image source={Left_Img} style={styles.leftImg} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.profileInfoContainer}>
        <Image source={Avatar1_Img} style={styles.avatar} />
        <Text style={styles.name}>Ethan Nagata</Text>
        <Text style={styles.userId}>@ethanagata</Text>
        <Text style={styles.job}>Student | Computer Engineering</Text>
        <Text style={styles.location}><Image source={Location_Img} style={styles.location_Img} />USA, South Dakota</Text>
        <View style={styles.indicatorContainer}>
          <View style={styles.indicatorGroup}>
            <Text style={styles.count}>17</Text>
            <Text style={styles.indicator}>Posts</Text>
          </View>
          <View style={styles.indicatorGroup}>
            <Text style={styles.count}>30</Text>
            <Text style={styles.indicator}>Following</Text>
          </View>
          <View style={styles.indicatorGroup}>
            <Text style={styles.count}>101</Text>
            <Text style={styles.indicator}>Followers</Text>
          </View>
        </View>
        <View style={styles.btnGroup}>
          <TouchableOpacity style={styles.followBtn}>
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.msgBtn}>
            <Image source={Msg_Img} style={styles.msgImg} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          initialLayout={{ width: '100%' }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // fontFamily: 'Montserrat'
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    height: 152,
    backgroundColor: '#234323'
  },
  backBtn:{
    marginTop: 52,
    marginLeft: 30
  },
  leftImg: {
    width: 24,
    height: 24
  },
  profileInfoContainer: {
    marginTop: -45,
    width: 218,
    alignItems: 'center'
  },
  avatar: {
    width: 80,
    height: 80,
  },
  name: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 12,
  },
  userId: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: 'rgba(0, 0, 0, 0.7)',
    marginTop: 6,
  },
  job: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    marginTop: 12,
  },
  location: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: 6,
  },
  location_Img: {
    width: 16,
    height: 16,
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  indicatorGroup: {
    flexDirection: 'column',
    marginHorizontal: 16,
    alignItems: 'center'
  },
  count: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: '#365195'
  },
  indicator: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: 4,
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 18
  },
  followBtn: {
    backgroundColor: '#627BBB',
    width: 129,
    height: 32,
    borderRadius: 5,
    paddingVertical: 8
  },
  followText: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: 'white',
    alignSelf: 'center',
  },
  msgBtn: {
    backgroundColor: '#E0E6F3',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5
  },
  msgImg: {
    width: 24,
    height: 24
  },
  contentContainer: {
    paddingLeft: 24,
    paddingRight: 24,
    flex: 1,
    width: '100%',
    marginTop: 18
  },
  scene: {
    flex: 1,
  },
  article: {
    marginBottom: 26
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 48,
    marginBottom: 18
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    padding: 10
  },
  tabText: {
    fontSize: 13,
    fontFamily: 'Montserrat-Medium',
  },
  aboutGroup: {
    marginBottom: 20
  },
  aboutTitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 8
  },
  aboutContent: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  showMore: {
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
    color: '#627BBB'
  },
  aboutPeriod: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop: 10
  },
  skillGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  skillText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 100,
    backgroundColor: '#E0E6F3',
    marginBottom: 10,
    marginRight: 10
  },
  interestUserGroup: {

  },
  interestUser: {
    flexDirection: 'row',
    marginBottom: 12
  },
  interestAvatar: {
    width: 32,
    height: 32
  },
  interestUserInfo: {
    marginLeft: 18
  },
  interestUserName: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
  interestUserId: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0, 0, 0, 0.8)'
  }
});
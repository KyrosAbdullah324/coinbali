import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  Button
} from "react-native";

import HeaderCover_Img from "../../../assets/images/myProfileBg.png";
import Left_Img from "../../../assets/images/Left.png";
import Location_Img from "../../../assets/images/Location.png";
import Edit_Img from "../../../assets/images/edit.png";

import PostEdit_Img from "../../../assets/images/edit1.png";
import skillPlus_Img from "../../../assets/images/plus.png";
import Settings_Img from "../../../assets/images/settings.png";


import { useNavigation } from "@react-navigation/native";

import { TabView, SceneMap } from "react-native-tab-view";
import Avatar1_Img from '../../../assets/images/Avatar1.png'
import Avatar2_Img from '../../../assets/images/Avatar2.png'
import Avatar3_Img from '../../../assets/images/Avatar3.png'
import Avatar4_Img from '../../../assets/images/Avatar4.png'
import Avatar5_Img from '../../../assets/images/Avatar5.png'
import Avatar6_Img from '../../../assets/images/Avatar6.png'
import Article from '../../components/Article';
import Article_Img1 from "../../../assets/images/article1.png";
import Article_Img2 from "../../../assets/images/article2.png";
import Upload_Img from "../../../assets/images/upload1.png";

const PostsRoute = () => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  return (
  
  <ScrollView
    showsVerticalScrollIndicator={false} style={styles.scene}>
    <View style={styles.article}>
      <View style={styles.userInfo}>
        <Image source={Avatar1_Img} style={styles.articleAvatar} />
        <View style={styles.userNameContainer}>
          <View style={styles.nameCreated}>
            <Text style={styles.articleName}>Daniel Neal</Text>
          </View>
          <Text style={styles.articleUserId}>@danielneal</Text>
        </View>
      </View>
      <TouchableOpacity onPress={()=>{console.log('dfdf');setEditModalVisible(true)}}>
        <TextInput style={styles.shareInput} placeholder='Share a post with everyone.' editable={false}/>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={editModalVisible}
        onRequestClose={() => {
          setEditModalVisible(false);
        }}
        dropdownStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 0 }} />
        <View style={styles.modal2}>
          <View style={styles.article}>
            <View style={styles.userInfo}>
              <Image source={Avatar1_Img} style={styles.articleAvatar} />
              <View style={styles.userNameContainer}>
                <View style={styles.nameCreated}>
                  <Text style={styles.articleName}>Daniel Neal</Text>
                </View>
                <Text style={styles.articleUserId}>@danielneal</Text>
              </View>
            </View>
            <View>
              <TextInput style={styles.shareInput2} placeholder='Share a post with everyone.' multiline={true} numberOfLines={4} textAlignVertical='top' />
            </View>
            <TouchableOpacity style={styles.uploadContainer}>
              <Image source={Upload_Img} style={styles.leftImg} />
              <Text style={styles.uploadText}>Upload</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.postBtn} onPress={() => setEditModalVisible(false)}>
            <Text style={styles.postText}>Post</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
        menuShow={true}
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
        menuShow={true}
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
        menuShow={true}
      />
    </View>
  </ScrollView>
)};

const AboutRoute = () => {
  const navigation = useNavigation()
  return (
    <ScrollView
      showsVerticalScrollIndicator={false} style={styles.scene}>
      <View style={[styles.aboutGroup, { marginBottom: 43 }]}>
        <Text style={styles.aboutTitle}>Bio</Text>
        <Text style={styles.aboutContent}>
          I am a student of Computer Engineering, currently in my 4th and final
          year, I am single and searching for someone special, I have been
          interested in finance and will love the opportunity to learn and grow
          with this platform...<Text style={styles.showMore}>Show more</Text>
        </Text>
      </View>
      <View style={styles.aboutGroup}>
        <View style={styles.titleContainer}>
          <Text style={styles.aboutTitle}>Education</Text>
          <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate('AddEducation')}>
            <Image source={skillPlus_Img} style={styles.skillPlusImg} />
          </TouchableOpacity>
        </View>
        <View style={[styles.titleContainer]}>
          <Text style={styles.aboutContent}>Bachelor, Northwestern University</Text>
          <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate('AddEducation')}>
            <Image source={PostEdit_Img} style={styles.leftImg} />
          </TouchableOpacity>
        </View>
        <Text style={styles.aboutPeriod}>2018 - Present</Text>
      </View>
      <View style={styles.aboutGroup}>
        <View style={styles.titleContainer}>
          <Text style={styles.aboutTitle}>Work experience</Text>
          <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate('AddWork')}>
            <Image source={skillPlus_Img} style={styles.skillPlusImg} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.aboutContent}>Financial Consultant</Text>
          <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate('AddWork')}>
            <Image source={PostEdit_Img} style={styles.leftImg} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.aboutPeriod, { marginBottom: 10 }]}>2021 - 2021</Text>
        <View style={[styles.titleContainer]}>
          <Text style={styles.aboutContent}>Financial Training</Text>
          <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate('AddWork')}>
            <Image source={PostEdit_Img} style={styles.leftImg} />
          </TouchableOpacity>
        </View>
        <Text style={styles.aboutPeriod}>2021 - 2021</Text>
      </View>
      <View style={styles.aboutGroup}>
        <View style={styles.titleContainer}>
          <Text style={styles.aboutTitle}>Skills</Text>
          <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate('AddSkills')}>
            <Image source={skillPlus_Img} style={styles.skillPlusImg} />
          </TouchableOpacity>
        </View>
        <View style={styles.skillGroup}>
          <Text style={styles.skillText}>financial analytics</Text>
          <Text style={styles.skillText}>mapping</Text>
          <Text style={styles.skillText}>Python</Text>
          <Text style={styles.skillText}>c++</Text>
          <Text style={styles.skillText}>Java</Text>
        </View>
      </View>
      <View style={[styles.aboutGroup, { marginBottom: 10 }]}>
        <Text style={[styles.aboutTitle, { marginBottom: 10 }]}>Interests</Text>
        <View style={styles.interestUserGroup}>
          <View style={styles.interestUser}>
            <Image source={Avatar6_Img} style={styles.interestAvatar} />
            <View style={styles.interestUserInfo}>
              <Text style={styles.interestUserName}>James Peterson</Text>
              <Text style={styles.interestUserId}>@jamespererson</Text>
            </View>
          </View>
          <View style={styles.interestUser}>
            <Image source={Avatar5_Img} style={styles.interestAvatar} />
            <View style={styles.interestUserInfo}>
              <Text style={styles.interestUserName}>Alisha Collier</Text>
              <Text style={styles.interestUserId}>@alishacollier</Text>
            </View>
          </View>
          <View style={styles.interestUser}>
            <Image source={Avatar4_Img} style={styles.interestAvatar} />
            <View style={styles.interestUserInfo}>
              <Text style={styles.interestUserName}>Frank Miller</Text>
              <Text style={styles.interestUserId}>@frankmiller</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const renderTabBar = (props) => (
  <View style={styles.tabBar}>
    {props.navigationState.routes.map((route, index) => {
      const isFocused = props.navigationState.index === index;
      const onPress = () => {
        props.jumpTo(route.key);
      };

      return (
        <TouchableOpacity
          key={route.key}
          style={[
            styles.tab,
            { borderBottomColor: isFocused ? "#627BBB" : "white" },
          ]}
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
    { key: "Posts", title: "Posts" },
    { key: "About", title: "About" },
  ]);

  const renderScene = SceneMap({
    Posts: PostsRoute,
    About: AboutRoute,
  });


  return (
    <View style={styles.container}>
      <ImageBackground
        source={HeaderCover_Img}
        style={styles.topbar}
        resizeMode="cover"
      >
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Image source={Left_Img} style={styles.leftImg} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backBtn, { marginRight: 24, marginTop: 52 }]}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image source={Settings_Img} style={styles.leftImg} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.profileInfoContainer}>
        <Image source={Avatar1_Img} style={styles.avatar} />
        <Text style={styles.name}>Ethan Nagata</Text>
        <Text style={styles.userId}>@ethanagata</Text>
        <Text style={styles.job}>Student | Computer Engineering</Text>
        <Text style={styles.location}>
          <Image source={Location_Img} style={styles.location_Img} />
          USA, South Dakota
        </Text>
        <View style={styles.indicatorContainer}>
          <View style={styles.indicatorGroup}>
            <Text style={styles.count}>17</Text>
            <Text style={styles.indicator}>Posts</Text>
          </View>
          <TouchableOpacity onPress = {()=>{navigation.navigate("Following", {type:'Following'})}}>
            <View style={styles.indicatorGroup}>
              <Text style={styles.count}>30</Text>
              <Text style={styles.indicator}>Following</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {()=>{navigation.navigate("Following", {type:'Followers'})}}>
            <View style={styles.indicatorGroup}>
              <Text style={styles.count}>101</Text>
              <Text style={styles.indicator}>Followers</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.btnGroup}>
          <TouchableOpacity style={styles.followBtn}>
            <Image source={Edit_Img} style={styles.msgImg} />
            <Text style={styles.followText}>Edit profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          initialLayout={{ width: "100%" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // fontFamily: 'Montserrat'
  },
  topbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 152,
    backgroundColor: "#234323",
  },
  backBtn: {
    marginTop: 52,
    marginLeft: 30,
  },
  leftImg: {
    width: 24,
    height: 24,
  },
  profileInfoContainer: {
    marginTop: -45,
    width: 218,
    alignItems: "center",
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
    color: "rgba(0, 0, 0, 0.7)",
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
    color: "rgba(0, 0, 0, 0.5)",
    marginTop: 6,
  },
  location_Img: {
    width: 16,
    height: 16,
  },
  indicatorContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  indicatorGroup: {
    flexDirection: "column",
    marginHorizontal: 16,
    alignItems: "center",
  },
  count: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: "#365195",
  },
  indicator: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: "rgba(0, 0, 0, 0.5)",
    marginTop: 4,
  },
  btnGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 18,
  },
  followBtn: {
    backgroundColor: "#627BBB",
    width: 159,
    height: 32,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  followText: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: "white",
    marginLeft: 10
  },
  msgBtn: {
    backgroundColor: "#E0E6F3",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
  },
  msgImg: {
    width: 24,
    height: 24,
  },
  contentContainer: {
    paddingLeft: 24,
    paddingRight: 24,
    flex: 1,
    width: "100%",
    marginTop: 18,
  },
  scene: {
    flex: 1,
  },
  article: {
    marginBottom: 26,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 48,
    marginBottom: 18,
  },
  tab: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    padding: 10,
  },
  tabText: {
    fontSize: 13,
    fontFamily: 'Montserrat-Medium',
  },
  userInfo: {
    flexDirection: "row",
  },
  articleAvatar: {
    width: 32,
    height: 32,
  },
  userNameContainer: {
    marginLeft: 10,
  },
  nameCreated: {
    flexDirection: "row",
    alignItems: "center",
  },
  articleName: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
  articleUserId: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: "rgba(0, 0, 0, 0.8)",
  },
  aboutGroup: {
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  aboutContent: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  showMore: {
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
    color: "#627BBB",
  },
  aboutPeriod: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: "rgba(0, 0, 0, 0.6)",
  },
  skillGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  skillText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 100,
    backgroundColor: "#E0E6F3",
    marginBottom: 10,
    marginRight: 10,
  },
  interestUserGroup: {},
  interestUser: {
    flexDirection: "row",
    marginBottom: 12,
  },
  interestAvatar: {
    width: 32,
    height: 32,
  },
  interestUserInfo: {
    marginLeft: 18,
  },
  interestUserName: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
  interestUserId: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: "rgba(0, 0, 0, 0.8)",
  },
  shareInput: {
    backgroundColor: '#EAECF1',
    height: 32,
    width: '100%',
    borderRadius: 8,
    padding: 8,
    marginTop: 8
  },
  editBtn: {
    marginLeft: 20
  },
  skillPlusImg: {
    width: 16,
    height: 16
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
    modal2: {
    marginTop: 91,
    marginHorizontal: 24,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    paddingTop: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
    article: {
    marginBottom: 26,
  },
    uploadContainer: {
    marginTop: 12,
    marginBottom: 28,
    flexDirection: 'row',
    alignItems: 'center'
  },
    uploadText: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 4,
    color: '#8A98AA'
  },
    postBtn: {
    backgroundColor: "#627BBB",
    width: '100%',
    height: 39,
    borderRadius: 5,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  postText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: "white",
  },
  shareInput2: {
    backgroundColor: '#EAECF1',
    height: 130,
    width: '100%',
    borderRadius: 8,
    padding: 8,
    marginTop: 20
  },
});

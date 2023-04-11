import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import { TabView, SceneMap } from "react-native-tab-view";
import { useNavigation } from '@react-navigation/native';
import CustomGobackWidget from '../../components/CustomGobackWidget';

import Avatar1_Img from "../../../assets/images/Avatar1.png";
import Avatar2_Img from "../../../assets/images/Avatar2.png";
import Avatar3_Img from "../../../assets/images/Avatar3.png";
import Avatar4_Img from "../../../assets/images/Avatar4.png";
import Avatar5_Img from "../../../assets/images/Avatar5.png";

const Item = ({ name, id, isFollow, image }) => {
  return (
    <View style={styles.User} >
      <View style={styles.UserInfoWrap}>
        <Image source={image} style={styles.Avatar} />
        <View style={styles.UserInfo}>
          <Text style={styles.UserName}>{name}</Text>
          <Text style={styles.UserId}>{id}</Text>
        </View>
      </View>
      {!isFollow ?
        (<TouchableOpacity style={styles.followBtn} onPress={() => {
        }}>
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>) :
        (<TouchableOpacity style={styles.unfollowBtn} onPress={() => {
        }}>
          <Text style={styles.unfollowText}>Unfollow</Text>
        </TouchableOpacity>)
      }
    </View >)
}
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
const Following = () => {
  return (
    <View style={styles.UserGroup}>
      {
        (sampleData.length !== 0) ?
          sampleData.map(({ name, id, isFollow, image }, index) =>
            (<Item key={index} name={name} id={id} isFollow={isFollow} image={image}></Item>)
          ) :
          (<Text>default</Text>)
      }
    </View>
  )
}
const Followers = () => {
  return (
    <View style={styles.UserGroup}>
      {
        (sampleData.length !== 0) ?
          sampleData.map(({ name, id, isFollow, image }, index) =>
            (<Item key={index} name={name} id={id} isFollow={isFollow} image={image}></Item>)
          ) :
          (<Text>default</Text>)
      }
    </View>
  )
}
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
export default ({ route }) => {
  const navigation = useNavigation();
  const [routes] = useState([
    { key: "Following", title: "Following" },
    { key: "Followers", title: "Followers" },
  ]);
  const { type } = route.params;
  const initial = routes.findIndex(item => item.key === type);
  const [index, setIndex] = useState(initial);

  const renderScene = SceneMap({
    Following,
    Followers
  });
  return (
    <View style={styles.container}>
      <CustomGobackWidget Title='Ethan Nagata' />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={{ width: "100%" }}
        style={{ width: '100%' }}
      />
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
  UserGroup: {
    width: '100%',
  },
  User: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  Avatar: {
    width: 40,
    height: 40
  },
  UserInfoWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  UserInfo: {
    marginLeft: 10
  },
  UserName: {
    marginTop: 3,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  UserId: {
    marginTop: 2,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0, 0, 0, 0.8)'
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: '100%',
    height: 48,
    marginVertical: 18,
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
  followBtn: {
    backgroundColor: '#627BBB',
    height: 26,
    borderRadius: 5,
    paddingTop: 5,
    width: 85,
    borderWidth: 1,
    borderColor: '#627BBB',
  },
  followText: {
    fontSize: 11,
    fontFamily: 'Montserrat-SemiBold',
    color: 'white',
    alignSelf: 'center',
  },
  unfollowText: {
    fontSize: 11,
    fontFamily: 'Montserrat-SemiBold',
    color: '#627BBB',
    alignSelf: 'center',
  },
  unfollowBtn: {
    height: 26,
    borderRadius: 5,
    paddingTop: 5,
    width: 85,
    borderWidth: 1,
    borderColor: '#627BBB',
    backgroundColor: 'white'
  },

});
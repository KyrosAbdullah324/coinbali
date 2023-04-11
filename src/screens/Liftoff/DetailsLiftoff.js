import React from 'react';
import { View, Text, Switch , TouchableOpacity, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import Left_Img from "../../../assets/images/Left.png";
import Avatar1 from '../../../assets/images/Avatar1.png';
import Avatar from '../../../assets/images/avatar.png';
import ProfileIcon from '../../../assets/images/Profile.png'
import EtherBackImg from '../../../assets/images/etherback.png'

import CustomInput from '../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Checkbox } from 'react-native-paper';
import { TabView, SceneMap } from 'react-native-tab-view';
import CustomUpdate from '../../components/liftoff/CustomUpdate';
import CustomDiscussion from '../../components/liftoff/CustomDiscussion';
import CustomTeam from '../../components/liftoff/CustomTeam';
const StoryRoute = () => (
<ScrollView
    showsVerticalScrollIndicator={false} style={styles.scene} >
    <View style={{marginBottom: 38, paddingTop: 18}}>
      <Text style={{fontSize: 16, lineHeight: 20, fontFamily: 'Montserrat-SemiBold', color: 'black', marginBottom: 10}}>Story</Text>
      <Text style={{fontSize: 13, lineHeight: 16, fontFamily: 'Montserrat-Regular', color: 'black', marginBottom: 10}}>
      Trading and investing can be a difficult task to learn and make profits at the end. A vast majority of traders agree on this assessment. I offer a way to invest in trust and not just trust but also on analysis of un-disputed investment strategies.
      </Text>
      <Text style={{fontSize: 13, lineHeight: 16, fontFamily: 'Montserrat-Regular', color: 'black'}}>
      That’s why when you invest on with me you will get access to updates, reports and statistics for you to make informed decisions on what you will be investing upon or if you want to add to your watch-lists.
      </Text>
    </View>
  </ScrollView>
);

const FAQRoute = () => (
  <ScrollView
    showsVerticalScrollIndicator={false} style={styles.scene} >
  <View style={{marginBottom: 38, paddingTop: 18}}>
    <Text style={{fontSize: 16, lineHeight: 20, fontFamily: 'Montserrat-SemiBold', color: 'black', marginBottom: 10}}>FAQ</Text>
    <Text style={{fontSize: 15, lineHeight: 18, fontFamily: 'Montserrat-SemiBold', color: 'black', marginBottom: 10}}>What are the risks?</Text>
    
    <Text style={{fontSize: 13, lineHeight: 16, fontFamily: 'Montserrat-Regular', color: 'black', marginBottom: 10}}>
    I offer a way to invest in trust and not just trust but also on analysis of un-disputed investment strategies. That’s why when you invest on with me you will get access to updates, reports and statistics for you to make informed decisions on what you will be investing upon or if you want to add to your watch-lists.
    </Text>
    <Text style={{fontSize: 15, lineHeight: 18, fontFamily: 'Montserrat-SemiBold', color: 'black', marginBottom: 10}}>What are the risks?</Text>
    
    <Text style={{fontSize: 13, lineHeight: 16, fontFamily: 'Montserrat-Regular', color: 'black'}}>
    I offer a way to invest in trust and not just trust but also on analysis of un-disputed investment strategies. That’s why when you invest on with me you will get access to updates, reports and statistics for you to make informed decisions on what you will be investing upon or if you want to add to your watch-lists.
    </Text>
  </View>
</ScrollView>
  );

const UpdatesRoute = () => (
  <ScrollView
    showsVerticalScrollIndicator={false} style={styles.scene} >
    <View style={{marginBottom: 38, paddingTop: 18}}>
        <CustomUpdate/>
        <View style={{width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.2)', height: 1, marginBottom: 34}}></View>
        <CustomUpdate/>
      </View>
      
    </ScrollView>
  );

    
const DiscussionRoute = () => (
  <ScrollView
    showsVerticalScrollIndicator={false} style={styles.scene} >
    <View style={{marginBottom: 20, paddingTop: 18}}>
          <View style={{flexDirection: "row", marginBottom: 17, alignItems: "center"}}>
              <Image source={Avatar} style={{width: 40, height: 40}} />
              <View style={{marginLeft: 10, flexDirection: "column"}}>
                <Text style={styles.fullname}>Daniel Neal</Text>
                <Text style={styles.username}>@danielneal</Text>
              </View>
          </View>
          <TextInput style={{...styles.inputcomment}} placeholder={"Write a comment..."} onChange={e=>onChange(e.target.value)}/>
          <TouchableOpacity style={styles.postButton} onPress={() => {}}> 
                <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
          <View style={{flexDirection: "column"}}>
          <View style={{width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.2)', height: 1}}></View>

            <CustomDiscussion/>
          <View style={{width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.2)', height: 1}}></View>

            <CustomDiscussion/>
          <View style={{width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.2)', height: 1}}></View>

            <CustomDiscussion/>
            <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize:14, lineHeight: 16, letterSpacing: 0.2, color: 'rgba(54, 81, 149, 1)'}}>Show more</Text>
          </View>

          
      </View>
      
    </ScrollView>
);

      
const TeamRoute = () => {
  const teammember = [
    {
      usericon: require('../../../assets/images/Avatar1.png'),
      fullname: "Ethan Nagata",
      username: "@ethanagata",
      role: "Project creator"
    },
    {
      usericon: require('../../../assets/images/Avatar5.png'),
      fullname: "Alisha Collier",
      username: "@alishacollier",
      role: "Collaborator"
    },
    {
      usericon: require('../../../assets/images/Avatar2.png'),
      fullname: "Lukas Faust",
      username: "@lukasfaust",
      role: "Collaborator"
    }
  ]
  return(
  <ScrollView
    showsVerticalScrollIndicator={false} style={styles.scene} >
    <View style={{marginBottom: 0, paddingTop: 18}}>
    <Text style={{fontSize: 16, lineHeight: 20, fontFamily: 'Montserrat-SemiBold', color: 'black', marginBottom: 10}}>Team</Text>
    <View style={{marginBottom: 38}}>
      {
        teammember.map((item, index) => {

             return (
              <View key={index}>
                {
                  index !==0 && <View style={{width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.2)', height: 1, marginBottom: 10}}></View>
                }
                <CustomTeam usericon={item.usericon} fullname={item.fullname} username={item.username} role={item.role}/>
              </View>
             )
        })
      }
    </View>
    </View>
     
</ScrollView>
)};
      

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
          style={[styles.tab, { borderBottomColor: isFocused ? '#627BBB' : 'transparent' }]}
          onPress={onPress}
        >
          <View style={{flexDirection: "row", gap: 4}}>
          <Text style={{...styles.tabText, color: isFocused ? '#627BBB' : 'black' }}>{route.title}</Text>
          {
            route.count &&  <Text style={{width: 15, height: 15, backgroundColor: 'rgba(98, 123, 187, 0.3)', color:'#365195', textAlign: "center", borderRadius: 50, fontSize: 10}}>{route.count}</Text>
          }
          </View>
        </TouchableOpacity>
      );
    })}
  </View>
  );

export default ({route, navigation}) => {
  const [index, setIndex] = useState(0);
  const {data} = route.params;
  const [routes] = useState([
    { key: 'Story', title: 'Story' },
    { key: 'FAQ', title: 'FAQ' },
    { key: 'Updates', title: 'Updates', count: 2},
    { key: 'Discussion', title: 'Discussion', count: 10},
    { key: 'Team', title: 'Team' },
  ]);

  const renderScene = SceneMap({
    Story: StoryRoute,
    FAQ: FAQRoute,
    Updates: UpdatesRoute,
    Discussion: DiscussionRoute,  
    Team: TeamRoute,
  });
  return (
        <View style={styles.containerview}>
            <View style={styles.topbar}>
                <TouchableOpacity onPress={() => {navigation.navigate('ListLiftoff1')}} style={styles.topbar}>
                  <Image source={Left_Img} style={styles.leftImg} />
                  <Text  style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16, lineHeight: 19.5}}>Details</Text>
                  <Image source={Left_Img} style={styles.leftImgHidden} />
                </TouchableOpacity>
            </View>
            <Image source={EtherBackImg} style={{width: '100%', height: 173, marginTop: 38, borderRadius: 10}}/>
            <Text style={styles.title}>Investing into Ethereum</Text>
            <Text style={styles.description}>Raising funds for investing into Ethereum.</Text>
            <View style={{flexDirection: "row", marginBottom: 17, alignItems: "center"}}>
              <Image source={Avatar1} style={{width: 32, height: 32}} />
              <View style={{marginLeft: 10, flexDirection: "column"}}>
                <Text style={styles.fullname}>Daniel Neal</Text>
                <Text style={styles.username}>@danielneal</Text>
              </View>
            </View>
            <Text style={styles.moneyTxt}>{data.dollar}</Text>

            <View style={{position: 'relative', marginBottom: 16.5}}>
                <View style={{height: 8, borderRadius: 20, backgroundColor: '#C4CCE2', width: '100%', position: 'absolute'}}></View>
                <View style={{height: 8, borderRadius: 20, backgroundColor: '#627BBB', width: '30%', position: 'absolute'}}></View>
            </View>
            <View style={{flexDirection: "row"}}>
                <View style={{flexDirection: "column", marginRight: 40}}>
                  <Text style={styles.infotxt}>{data.dayoff}</Text>
                  <Text style={styles.infotxt1}>days left</Text>
                </View>
                <View style={{flexDirection: "column", marginRight: 40}}>
                  <Text style={styles.infotxt}>{data.funded}</Text>
                  <Text style={styles.infotxt1}>funded</Text>
                </View>
                <View style={{flexDirection: "column", marginRight: 40}}>
                  <Text style={styles.infotxt}>$10,000</Text>
                  <Text style={styles.infotxt1}>goal</Text>
                </View>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between",columnGap: 8,    marginTop: 20.5,
    marginBottom: 20,}}>
              <TouchableOpacity style={styles.investButton} onPress={() => navigation.navigate('InvestUSD')}> 
                  <Text style={styles.investButtonText}>Invest</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.addWatchListButton} onPress={() => {}}> 
                  <Text style={styles.addWatchListButtonText}>Add to Watchlist</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
              <TabView
               style={{flex: 1, width: '100%'}}
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
  containerview: {
    backgroundColor: '#fff',
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 44,
    paddingLeft: 24,
    paddingRight: 24,
  },
  topbar: {
    height: 24,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  leftImg: {
    width: 24,
    height: 24
  },
  leftImgHidden: {
    width: 24,
    height: 24,
    opacity: 0
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
  title: {
    fontSize: 20,
    lineHeight: 24,
    marginTop: 20,
    fontFamily: 'Montserrat-Medium',
    color: '#000000',
  },
  moneyTxt: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: '#365195',
    marginBottom: 7
  },
  infotxt: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: '#365195',
    marginBottom: 4
  },
  infotxt1: {
    fontSize: 14,
    lineHeight: 17,
    fontFamily: 'Montserrat-Regular',
    color: '#000000',
    opacity: 0.4,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    marginTop: 8,
    color: '#000000',
    lineHeight: 17,
    alignSelf: 'flex-start',
    marginBottom: 19
  },
  uploadButton: {
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#365195',
    width: '100%',
    height: 192,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  loginButton: {
    backgroundColor: '#627BBB',
    padding: 10,
    borderRadius: 5,
    marginTop: 43,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },  
  investButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#627BBB',
    borderRadius: 5,
    maxWidth: 137,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center'
  },
  investButtonText: {
    color: 'white',
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 0.2,
    fontFamily: 'Montserrat-Bold',
  },
  addWatchListButton: {
    flex: 1.3,
    flexDirection: 'row',
    borderRadius: 5,

    width: 182,
    height:26,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "#627BBB"
  },
  addWatchListButtonText: {
    color: '#627BBB',
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 0.2,
    fontFamily: 'Montserrat-Bold',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 36,
    width: '100%',
    borderBottomColor:'rgba(0,0,0,0.2)',
    borderBottomWidth:1
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    padding: 10,
    // paddingHorizontal: 16,
  },
  tabText: {
    fontSize: 11,
    lineHeight: 13,
    letterSpacing: 0.2,
    fontFamily: 'Montserrat-Regular',
  },
  scene: {
    flex: 1,
  },
  article: {
    marginBottom: 26
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
    color: "rgba(0, 0, 0, 0.3)"
  },
  postButton: {
    backgroundColor: '#627BBB',
    paddingHorizontal: 30,
    paddingVertical: 6,
    borderRadius: 5,
    marginTop: 14,
    marginBottom: 14,
    width: 91,
    alignItems: 'center',
  },
  postButtonText: {
    color: 'white',
    fontSize: 13,
    lineHeight: 16,
    letterSpacing: 0.2,
    fontFamily: 'Montserrat-Bold',
  },
});
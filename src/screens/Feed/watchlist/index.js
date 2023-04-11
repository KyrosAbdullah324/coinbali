import React, { useState, useRef, createContext, useContext, useEffect } from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, ScrollView, FlatList, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';
import Edit_Img from '../../../../assets/images/edit1.png'
import Delete_Img from '../../../../assets/images/delete.png'
import { rgb } from 'd3';
//TabBar Component
const { width, height } = Dimensions.get('window');
const FlagContext = createContext();

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
          <Text style={[styles.tabText , { opacity: isFocused ? 1 : 0.3 }]}>{route.title}</Text>
        </TouchableOpacity>
      );
    })}
  </View>
);
//PopularWidget Component
const PopularWidget = () => {
  //data
  const sampleData = [{
    title: 'My Top coin',
    assets: 12,
    followers: 545,
    isFollow: true
  },
  {
    title: 'Watchlist 2022 ',
    assets: 23,
    followers: 1213,
    isFollow: true
  },
  {
    title: 'TOP 2022',
    assets: 14,
    followers: 1435,
    isFollow: false
  },
  {
    title: 'NFT',
    assets: 12,
    followers: 3545,
    isFollow: false
  },
  {
    title: 'TOP',
    assets: 33,
    followers: 545,
    isFollow: false
  },
  {
    title: 'TOP coin',
    assets: 33,
    followers: 545,
    isFollow: false
  },
  {
    title: 'Watchlist 2022',
    assets: 33,
    followers: 545,
    isFollow: true
  },
  {
    title: 'My Top coin',
    assets: 12,
    followers: 545,
    isFollow: true
  },
  {
    title: 'Watchlist 2022 ',
    assets: 23,
    followers: 1213,
    isFollow: true
  },
  {
    title: 'TOP 2022',
    assets: 14,
    followers: 1435,
    isFollow: false
  },
  {
    title: 'NFT',
    assets: 12,
    followers: 3545,
    isFollow: false
  },
  {
    title: 'TOP',
    assets: 33,
    followers: 545,
    isFollow: false
  },
  {
    title: 'TOP coin',
    assets: 33,
    followers: 545,
    isFollow: false
  },
  {
    title: 'Watchlist 2022',
    assets: 33,
    followers: 545,
    isFollow: true
  }
  ]

  //Item of Component
  const Item = ({ title, followers, assets, isFollow }) => {
    return (
      <View style={stylesFollowing.item} >
        <Text style={stylesFollowing.title}>{title}</Text>
        <View style={stylesFollowing.infoWrap}>
          <Text style={stylesFollowing.info}>{assets} Assets</Text>
          <Text style={stylesFollowing.info}>{followers} Followers</Text>
        </View>
        {!isFollow ?
          (<TouchableOpacity style={stylesFollowing.followBtn} onPress={() => {
          }}>
            <Text style={stylesFollowing.followText}>Follow</Text>
          </TouchableOpacity>) :
          (<TouchableOpacity style={stylesFollowing.unfollowBtn} onPress={() => {
          }}>
            <Text style={stylesFollowing.unfollowText}>Unfollow</Text>
          </TouchableOpacity>)
        }
      </View >)
  }
  return (
    <View style={{ width: '100%' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={stylesFollowing.widget}>
        {
          (sampleData.length !== 0) ?
            sampleData.map(({ title, followers, assets, isFollow }, index) =>
              (<Item key={index} title={title} followers={followers} assets={assets} isFollow={isFollow}></Item>)
            ) :
            (<Text>default</Text>)
        }
      </ScrollView>
    </View >
  );
}
const ActionToolTip = ({ actions, handleToggle }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState([0, 0]);
  const handle = (e) => {
    let offestX = 0, offestY = 0;
    if (width / 2 < e.nativeEvent.pageX)
      offestX = 210
    else
      offestX = 0
    if (height / 2 < e.nativeEvent.pageY)
      offestY = 70 + actions.length * 30
    else
      offestY = 50
    setPosition([e.nativeEvent.pageX - offestX, e.nativeEvent.pageY - offestY])
    setVisible(visible => !visible);
  }
  const close = () => {
    setVisible(visible => !visible);
  }
  React.useEffect(() => {
    handleToggle.current = handle;
  }, [])
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={handle}
      dropdownStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <TouchableWithoutFeedback onPress={() => { close() }}>
        <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 0 }} />
      </TouchableWithoutFeedback>
      <View style={[
        styleActionTooltip.widget,
        {
          top: position[1],
          left: position[0],
          fontFamily: 'Montserrat-Regular',
        }]
      }>
        {(actions.lengh !== 0) ? actions.map(({ name, image, func = () => { } }, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                close();
                func();
              }}
              style={
                [styleActionTooltip.item,
                ((actions.length - 1) == index) && styleActionTooltip.borderLess]
              }>
              <Image source={image} style={styleActionTooltip.image} />
              <Text style={styleActionTooltip.text}>{name}</Text>
            </TouchableOpacity>
          )
        }) :
          (
            <></>
          )}
      </View>
    </Modal>
  )
}
//MyWatch Component
const MyWatchWidget = () => {
  const {flag} = useContext(FlagContext); // Access the data from the context
  const handleRef = useRef(null);
  const navigation = useNavigation();
  const sampleData = flag ? 
  [
    { id: '1', title: 'My Watchlist1' }
  ]:
  [];
  useEffect(()=>{
    console.log(flag+"hook")
  },[flag]);
  const actions = [{
    name: "Edit",
    image: Edit_Img,
    func: () => { navigation.navigate('SelectCoinAdded') }
  }, {
    name: "Delete Watchlist",
    image: Delete_Img,
  }]

  const marginT = (id = '1') ? { marginTop: 0 } : { marginTop: 10 };
  const itemstyle = {
    ...styles.itemContainer,
    ...marginT
  }

  const Item = ({ title }) => (
    <View style={{width:'100%'}}>
      <ActionToolTip handleToggle={handleRef} actions={actions} />
      <View style={itemstyle}>
        <Text style={styles.itemText}>{title}</Text>
        <TouchableOpacity
          style={styles.threedotbutton}
          onPress={(e) => handleRef.current(e)}>
          <Text style={styles.threedotbuttonText}>⋮</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
    </View>
  );

  return (
    <View style={watchStyle.widget}>
      {sampleData.map(({ title }, index) =>
        (<Item key={index} title={title} />)
      )}
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('NewWatchList')}>
        <Ionicons name="add" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}
//Folowing Component
const FollowingWidget = () => {
  const handleRef = useRef(null);
  const navigation = useNavigation();

  //data
  const sampleData = [
    {
      title: 'My Top coin',
      assets: 12,
      followers: 545,
      isFollow: true
    },
    {
      title: 'Watchlist 2022 ',
      assets: 23,
      followers: 1213,
      isFollow: true
    },
    {
      title: 'TOP 2022',
      assets: 14,
      followers: 1435,
      isFollow: true
    },
    {
      title: 'NFT',
      assets: 12,
      followers: 3545,
      isFollow: true
    },
    {
      title: 'TOP',
      assets: 33,
      followers: 545,
      isFollow: true
    },
    {
      title: 'TOP coin',
      assets: 33,
      followers: 545,
      isFollow: true
    },
    {
      title: 'Watchlist 2022',
      assets: 33,
      followers: 545,
      isFollow: true
    }
  ]
  const actions = [{ name: "Delete", image: Delete_Img }];
  //Item of Component
  const Item = ({ title, followers, assets, isFollow }) => {
    return (
      <View style={stylesFollowing.item} >
        <Text style={stylesFollowing.title}>{title}</Text>
        <View style={stylesFollowing.infoWrap}>
          <Text style={stylesFollowing.info}>{assets} Assets</Text>
          <Text style={stylesFollowing.info}>{followers} Followers</Text>
        </View>
        {!isFollow ?
          (<TouchableOpacity style={stylesFollowing.followBtn} onPress={() => {
          }}>
            <Text style={stylesFollowing.followText}>Follow</Text>
          </TouchableOpacity>) :
          (<TouchableOpacity style={stylesFollowing.unfollowBtn} onPress={() => {
          }}>
            <Text style={stylesFollowing.unfollowText}>Unfollow</Text>
          </TouchableOpacity>)
        }
      </View >)
  }
  return (
    <View style={{ width: '100%' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={stylesFollowing.widget}>
        {
          (sampleData.length !== 0) ?
            sampleData.map(({ title, followers, assets, isFollow }, index) =>
            (<TouchableOpacity key={index} onPress={() => { navigation.navigate('CoinManage') }}>
              <Item title={title} followers={followers} assets={assets} isFollow={isFollow}></Item>
            </TouchableOpacity>)
            ) :
            (<Text>default</Text>)
        }
      </ScrollView>
      <Text style={stylesFollowing.header}>Liftoffs</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={stylesFollowing.widget1}>
        <ActionToolTip actions={actions} handleToggle={handleRef} />
        <View style={stylesFollowing.item} >
          <View style={stylesFollowing.titleWrap}>
            <Text style={stylesFollowing.title}>Invest into Ethereum</Text>
            <Text style={stylesFollowing.titleInfo}>12 days left</Text>
          </View>
          <View style={stylesFollowing.infoWrap}>
            <Text style={stylesFollowing.info}>Raised $10000</Text>
            <Text style={stylesFollowing.info}>Funded 40%</Text>
          </View>
          <TouchableOpacity
            style={styles.threedotbutton}
            onPress={(e) => { handleRef.current(e) }}>
            <Text style={styles.threedotbuttonText}>⋮</Text>
          </TouchableOpacity>
        </View >
        <View style={stylesFollowing.item} >
          <View style={stylesFollowing.titleWrap}>
            <Text style={stylesFollowing.title}>Invest into Ethereum</Text>
            <Text style={stylesFollowing.titleInfo}>12 days left</Text>
          </View>
          <View style={stylesFollowing.infoWrap}>
            <Text style={stylesFollowing.info}>Raised $10000</Text>
            <Text style={stylesFollowing.info}>Funded 40%</Text>
          </View>
          <TouchableOpacity
            style={styles.threedotbutton}
            onPress={(e) => { handleRef.current(e) }}>
            <Text style={styles.threedotbuttonText}>⋮</Text>
          </TouchableOpacity>
        </View >
      </ScrollView>
    </View >
  );
}
export default ({route}) => {
  const flag = ((route.params??false)?(route.params.flag):false);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'MyWatchLists', title: 'My WatchLists' },
    { key: 'Following', title: 'Following' },
    { key: 'Popular', title: 'Popular' },
  ]);
  const renderScene = SceneMap({
    MyWatchLists: MyWatchWidget,
    Following: FollowingWidget,
    Popular: PopularWidget,
  });

  return (
    <View style={styles.container} >
      <FlagContext.Provider value={{flag}}>
      <TabView
      style={{flex: 1, width: '100%'}}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={{ width: '100%' }}
      />
      </FlagContext.Provider>
    </View>
  );
}
const stylesFollowing = StyleSheet.create({
  widget: {
    marginTop: 16,
  },
  widget1: {
    marginTop: 16,
  },
  header: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Montserrat-Medium',
    marginTop: 47,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)'
  },
  infoWrap: {
    fontSize: 10,
    lineHeight: 12,
    fontFamily: 'Montserrat-Regular',
    flex: 1
  },
  titleWrap: {
    flex: 1
  },
  title: {
    fontSize: 13,
    lineHeight: 16,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 2,
    flex: 1
  },
  titleInfo: {
    fontSize: 10,
    lineHeight: 12,
    fontFamily: 'Montserrat-Regular'
  },
  info: {
    marginBottom: 2,
    fontSize: 10,
    lineHeight: 12,
    fontFamily: 'Montserrat-Regular'
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
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 48,
    marginTop: 42,
    width: '100%',
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 1,
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  },
  fab: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 25,
    bottom: 28,
    width: 55,
    height: 55,
    backgroundColor: '#627BBB',
    borderRadius: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Montserrat-Medium'
  },
  threedotbutton: {
    paddingHorizontal: 5
  },
  threedotbuttonText: {
    fontSize: 20,
  },
  divider: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
const styleActionTooltip = StyleSheet.create({
  widget: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    width: 210,
    position: 'absolute',
    elevation: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 5
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    lineHeight: 17
  },
  item: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 6
  },
  image: {
    height: 24,
    width: 24,
    marginRight: 10,
  },
  borderLess: {
    borderBottomWidth: 0
  }
})
const watchStyle = StyleSheet.create({
  widget: {
    paddingTop: 21,
    position: 'relative',
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
})

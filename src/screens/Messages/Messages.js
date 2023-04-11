import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

import { useIsFocused, useNavigation } from '@react-navigation/native';
import Search_Img from '../../../assets/images/search.png';
import Left_Img from "../../../assets/images/Left.png";
import Avatar1_Img from "../../../assets/images/Avatar1.png";
import Avatar2_Img from "../../../assets/images/Avatar2.png";
import Avatar3_Img from "../../../assets/images/Avatar3.png";
import Avatar4_Img from "../../../assets/images/Avatar4.png";
import Avatar5_Img from "../../../assets/images/Avatar5.png";
const sampleData = [{
  name: "Michael Hines",
  id: "michaelhines",
  time: '10:50',
  message: 'The good news for Solana bag holders is simple. ',
  image: Avatar1_Img
}, {
  name: "George Bocanegra",
  id: "michaelhines",
  time: '10:50',
  message: "You: I seen the demo on this thing and it's impressive.",
  count: 2,
  image: Avatar2_Img
}, {
  name: "Lukas Faust",
  id: "michaelhines",
  time: '10:50',
  message: "We have the Saga on the way that's going to drastically increase the ease of our financial lives.",
  count: 0,
  image: Avatar3_Img
}, {
  name: "Ethan Nagata",
  id: "michaelhines",
  time: '10:50',
  message: "I seen the demo on this thing and it's impressive.",
  count: 2,
  image: Avatar4_Img
}
];
const Search = () => {
  return (
    <View style={stylesSearchWidget.controlWrap}>
      <View style={stylesSearchWidget.inputWarp}>
        <TextInput keyboardType='default' style={stylesSearchWidget.searchInput} placeholder="Search" />
        <Image style={stylesSearchWidget.inputSearchIcon} source={Search_Img} resizeMode='cover' />
      </View>
    </View>)
}
const Topbar = () => {
  var navigation = useNavigation();
  return (
    <View style={stylesTopbar.topbar}>
      <Text style={stylesTopbar.title}>
        People who liked it
      </Text>
      <TouchableOpacity style={stylesTopbar.backBtn} onPress={() => navigation.goBack()}>
        <Image source={Left_Img} style={stylesTopbar.leftImg} />
      </TouchableOpacity>
    </View>
  )
}
const HideText = ({ text, length }) => {
  if (text.length > length) {
    return (
      <Text style={styles.UserMessage}>
        {text.substr(0, length)}...
      </Text>
    );
  }
  return <Text style={styles.UserMessage}>{text}</Text>;
};
const Item = ({ image, name, message, id, time, count }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.User} onPress={() => { navigation.navigate('SendMessage') }}>
      <Image source={image} style={styles.Avatar} />
      <View style={styles.UserInfo}>
        <Text style={styles.UserName}>{name}</Text>
        <Text style={styles.UserId}>{id}</Text>
        <HideText style={styles.UserMessage} text={message} length={49} />
      </View>
      <View style={styles.StatuWapper}>
        <Text style={styles.time}>{time}</Text>
        {(count != 0 && count != null) ?
          (<Text style={styles.count}>{count}</Text>) :
          (<></>)
        }
      </View>
    </TouchableOpacity>
  )
}
export default () => {
  return (
    <View style={styles.container}>
      {/* <Topbar /> */}
      <Search />
      <ScrollView
    showsVerticalScrollIndicator={false} style={styles.scroll}>
        {
          (sampleData.length !== 0) ?
            sampleData.map(({ name, id, image, time, message, count }, index) =>
            (<Item key={index} name={name} id={id} image={image}
              message={message} count={count} time={time}></Item>)
            ) :
            (<Text>Empty</Text>)
        }
      </ScrollView>
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
    fontFamily: 'Montserrat-Regular'
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
  scroll: {
    marginTop: 22,
    width: '100%'
  },
  User: {
    flexDirection: 'row',
    height: 70,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)'
  },
  Avatar: {
    width: 40,
    height: 40
  },
  UserInfo: {
    marginLeft: 10
  },
  UserName: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  UserId: {
    fontSize: 12,
    lineHeight: 16,
    color: 'rgba(0,0,0,0.8)',
    letterSpacing: 0.2,
    fontFamily: 'Montserrat-Regular'
  },
  UserMessage: {
    fontSize: 12,
    lineHeight: 16,
    height: 16,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: 0.2,
    marginRight: 50
  },
  StatuWapper: {
    position: "absolute",
    right: 0,
    top: 10,
  },
  time: {
    fontSize: 10,
    lineHeight: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0,0,0,0.5)',
    marginBottom: 8
  },
  count: {
    color: 'white',
    backgroundColor: '#627BBB',
    borderRadius: 50,
    paddingHorizontal: 6,
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Montserrat-SemiBold'
  }
});
const stylesTopbar = StyleSheet.create({
  topbar: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    width: '100%'
  },
  title: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: 'Montserrat-SemiBold'
  },
  backBtn: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -12 }],
    left: 0
  },
  leftImg: {
    width: 24,
    height: 24
  }
})
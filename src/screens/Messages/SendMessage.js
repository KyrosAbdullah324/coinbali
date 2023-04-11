import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Dimensions, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Image, ScrollView, Modal } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Left_Img from "../../../assets/images/Left.png";
import Avatar1_Img from "../../../assets/images/Avatar1.png";
import Avatar2_Img from "../../../assets/images/Avatar2.png";
import Upload_Img from "../../../assets/images/upload_b.png";
import Delete_Img from "../../../assets/images/delete.png"
import Edit_Img from "../../../assets/images/edit1.png"
import Profile_Img from "../../../assets/images/Profile.png"
const sampleData = [{
  isMe: true,
  message: 'The good news for Solana bag holders is simple. ',
  time: '10:41'
}, {
  isMe: false,
  message: "I seen the demo on this thing and it's impressive.",
  avatar: Avatar1_Img,
  time: '10:43'
}, {
  isMe: true,
  message: "The good news for Solana bag holders is simple. We have the Saga on the way that's going to drastically increase the ease of our financial lives.",
  time: '10:50'
}, {
  isMe: false,
  message: "The good news for Solana bag holders is simple. ",
  avatar: Avatar1_Img,
  time: '10:50'
}]
const actions = [{
  name: "View profile",
  image: Profile_Img
}, {
  name: "Delete",
  image: Delete_Img
}]
const actions1 = [{
  name: "Edit message",
  image: Edit_Img
}, {
  name: "Delete",
  image: Delete_Img
}]
const { width, height } = Dimensions.get('window');
const ActionToolTip = ({ actions, handleToggle }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState([0, 0]);
  const handle = (e) => {
    let offestX = 0, offestY = 0;
    if (width / 2 < e.nativeEvent.pageX)
      offestX = 200
    else
      offestX = 0
    if (height / 2 < e.nativeEvent.pageY)
      offestY = 130
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
        }]
      }>
        {(actions.lengh !== 0) ? actions.map(({ name, image }, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={handle}
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

const Topbar = () => {
  var navigation = useNavigation();
  const handleRef = useRef(null);
  return (
    <View style={styles.topSection}>
      <ActionToolTip actions={actions} handleToggle={handleRef} />
      <View style={stylesTopbar.topbar}>
        <TouchableOpacity style={styles.User}>
          <Image source={Avatar2_Img} style={styles.Avatar} />
          <View style={styles.UserInfo}>
            <Text style={styles.UserName}>Alisha Collier</Text>
            <Text style={styles.UserId}>@alishacollier</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={stylesTopbar.backBtn} onPress={() => navigation.goBack()} >
          <Image source={Left_Img} style={stylesTopbar.leftImg} />
        </TouchableOpacity>
        <TouchableOpacity style={stylesTopbar.iconstyle} onPress={(e) => { handleRef.current(e) }} >
          <Icon name="dots-horizontal" size={24} color="black" />
        </TouchableOpacity>

      </View>
    </View>
  )
}
const SendMessageWidget = () => {
  return (
    <View style={styleSendMessage.bottomSection}>
      <Image style={styleSendMessage.sendImageBtn} source={Upload_Img} />
      <TextInput style={styleSendMessage.sendInput}
        keyboardType='default'
        placeholder="Write a message"
        multiline
      />
      <TouchableOpacity>
        <Text style={styleSendMessage.sendBtn}>Send</Text>
      </TouchableOpacity>
    </View>
  )
}
const Item = ({ type, image, time, message }) => {
  const handleRef = useRef(null);
  return (
    <View>
      <ActionToolTip actions={actions1} handleToggle={handleRef} />
      {!type ?
        (<View style={stylesMsg.row}>
          <Image style={stylesMsg.Avatar} source={image} />
          <View style={stylesMsg.messageWrap}>
            <TouchableOpacity style={stylesMsg.messageBox} onPress={(e) => { handleRef.current(e) }}>
              <Text style={stylesMsg.message}>{message}</Text>
            </TouchableOpacity>
            <Text style={stylesMsg.time}>{time}</Text>
          </View>
        </View>) :
        (<View style={[stylesMsg.row, stylesMsg.meRow]}>
          <View style={[stylesMsg.messageWrap, stylesMsg.meMessageWrap]}>
            <Text style={stylesMsg.time}>{time}</Text>
            <TouchableOpacity style={stylesMsg.messageBox} onPress={(e) => { handleRef.current(e) }}>
              <Text style={[stylesMsg.message, stylesMsg.meMessage]}>{message}</Text>
            </TouchableOpacity>
          </View>
        </View>
        )}
    </View>
  )
}
export default () => {
  return (
    <View style={{ flex: 1 }}>
      <Topbar />
      <View style={styles.container}>
        <ScrollView
    showsVerticalScrollIndicator={false} style={styles.scroll}>
          {
            (sampleData.length !== 0) ?
              sampleData.map(({ isMe, message, avatar, time }, index) =>
                (<Item key={index} type={isMe} message={message} image={avatar} time={time} />)
              )
              :
              (<Text>Empty</Text>)
          }
        </ScrollView>
      </View>
      <SendMessageWidget />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    // fontFamily: 'Montserrat'
  },
  topSection: {
    backgroundColor: '#fff',
    paddingLeft: 24,
    paddingRight: 24,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)'
  },
  scroll: {
    marginTop: 22,
    width: '100%'
  },
  User: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6
    // height: 70,
    // paddingVertical: 10,
  },
  Avatar: {
    width: 40,
    height: 40
  },
  UserInfo: {
    marginLeft: 10
  },
  UserName: {
    fontSize: 13,
    lineHeight: 16,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 2
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
const stylesMsg = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  meRow: {
    justifyContent: 'flex-end'
  },
  Avatar: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  messageWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  meMessageWrap: {
    justifyContent: 'flex-end',
  },
  messageBox: {
    width: '70%',
  },
  message: {
    backgroundColor: 'rgba(98,123,187,0.1)',
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
    paddingRight: 20,
    fontFamily: 'Montserrat-Regular',
  },
  meMessage: {
    backgroundColor: '#627BBB',
    color: 'white'
  },
  time: {
    marginHorizontal: 10,
    color: 'rgba(0,0,0,0.5)',
    fontSize: 10,
    lineHeight: 16,
  }
})
const stylesTopbar = StyleSheet.create({

  topbar: {
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 51,
    width: '100%',
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
  },
  iconstyle: {
    position: 'absolute',
    right: 0,
    top: 12
  }
})
const styleSendMessage = StyleSheet.create({
  bottomSection: {
    bottom: 0,
    backgroundColor: '#fff',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 16,
    alignItems: 'flex-start',
    borderTopWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 103,
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sendImageBtn: {
    marginTop: 7,
  },
  sendInput: {
    flex: 1,
    marginHorizontal: 10,
    borderWidth: 2, borderColor: '#627bbb66', borderRadius: 8,
    fontSize: 14,
    // lineHeight: 17,
    paddingVertical: 5,
    paddingHorizontal: 8,
    paddingRight: 30,
    maxHeight: 71,
    fontFamily: 'Montserrat-Regular',
  },
  sendBtn: {
    lineHeight: 38,
    color: '#365195',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  }
})
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
    fontSize:14,
    lineHeight:17
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
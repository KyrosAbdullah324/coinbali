import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Modal,TouchableWithoutFeedback, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Avatar3_Img from "../../assets/images/Avatar3.png";
import Article_Img from "../../assets/images/article1.png";
import Like_Img from "../../assets/images/Like.png";
import Comment_Img from "../../assets/images/Comment.png";
import Share_Img from "../../assets/images/Share.png";
import Menu_Img from "../../assets/images/menu.png";
import PostEdit_Img from "../../assets/images/edit1.png";
import Delete_Img from "../../assets/images/delete.png";
import Close_Img from "../../assets/images/close.png";
import Upload_Img from "../../assets/images/upload1.png";

export default ({ articleData, menuShow, menuClick }) => {
  var navigator = useNavigation();
  let [shareModalVisible, setShareModalVisible] = useState(false);
  const [text, setText] = useState('');
  const [menuModalVisible, setMenuModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);

  const handleTextChange = (newText) => {
    setText(newText);
  };
  const handleToggle = () => {
    setShareModalVisible(!shareModalVisible);
  };
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={shareModalVisible}
        onRequestClose={handleToggle}
        dropdownStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <TouchableWithoutFeedback onPress={() => { handleToggle() }}>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 0 }} />
        </TouchableWithoutFeedback>
        <View style={styles.modal}>
          <View style={styles.shareUser}>
            <Image source={Avatar3_Img} style={styles.shareAvatar} />
            <View style={styles.shareUserInfo}>
              <Text style={styles.shareUserName}>Daniel Neal</Text>
              <Text style={styles.shareUserId}>@danielneal</Text>
            </View>
          </View>
          <TextInput
            style={styles.input}
            placeholder={'Add a comment...'}
            onChangeText={handleTextChange}
            value={text}
            multiline={true}
          />
          <View style={styles.shareArticle}>
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
            <Text style={styles.articleContent}>{articleData.content}</Text>
            {
              articleData.achieve !== '' &&
              <Image source={articleData.achieve} style={styles.achieve} />
            }
          </View>
          <TouchableOpacity style={styles.shareBtn} onPress={handleToggle}>
            <Text style={styles.shareText}>Share</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={menuModalVisible}
        onRequestClose={() => {
          setMenuModalVisible(false);
        }}
        dropdownStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 0 }} />
        <View style={styles.modal1}>
          <TouchableOpacity style={styles.closeBtn} title="Close" onPress={() => setMenuModalVisible(false)}>
            <Image source={Close_Img} style={styles.leftImg} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.editContainer} onPress={() => { setMenuModalVisible(false); setEditModalVisible(true) }}>
            <Image source={PostEdit_Img} style={styles.leftImg} />
            <Text style={styles.editText}>Edit post</Text>
          </TouchableOpacity>
          <View style={styles.divider}></View>
          <TouchableOpacity style={styles.editContainer} onPress={() => { setMenuModalVisible(false) }}>
            <Image source={Delete_Img} style={styles.leftImg} />
            <Text style={styles.editText}>Delete post</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
              <Image source={articleData.avatar} style={styles.articleAvatar} />
              <View style={styles.userNameContainer}>
                <View style={styles.nameCreated}>
                  <Text style={styles.articleName}>Daniel Neal</Text>
                </View>
                <Text style={styles.articleUserId}>@danielneal</Text>
              </View>
            </View>
            <View>
              <TextInput style={styles.shareInput} placeholder='Share a post with everyone.' multiline={true} numberOfLines={4} textAlignVertical='top' />
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
      <View>
        <View style={[styles.userInfo, { justifyContent: 'space-between' }]}>
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
          {
            menuShow &&
            <TouchableOpacity onPress={() => setMenuModalVisible(true)}>
              <Image source={Menu_Img} style={styles.articleIndicateIcon} />
            </TouchableOpacity>
          }
        </View>
        <Text style={styles.articleContent}>{articleData.content}</Text>
        {
          articleData.achieve !== '' &&
          <Image source={articleData.achieve} style={styles.achieve} />
        }
        <View style={styles.articleIndicateContainer}>
          <View style={styles.articleIndicateGroup}>
            <Image source={Like_Img} style={styles.articleIndicateIcon} />
            <TouchableOpacity onPress={() => { navigator.navigate('Likes') }}>
              <Text style={styles.articleIndicateText}>{articleData.likes} Likes</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.articleIndicateGroup}>
            <Image source={Comment_Img} style={styles.articleIndicateIcon} />
            <TouchableOpacity onPress={() => { navigator.navigate('Comments') }}>
              <Text style={styles.articleIndicateText}>{articleData.comments} Comments</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.articleIndicateGroup}>
            <Image source={Share_Img} style={styles.articleIndicateIcon} />
            <TouchableOpacity onPress={() => setShareModalVisible(true)}>
              <Text style={styles.articleIndicateText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  shareArticle: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
    marginTop: 10,
    padding: 10
  },
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
    width: '100%'
  },
  articleIndicateContainer: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-between'
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
  },
  modal: {
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
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modal1: {
    marginTop: 300,
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
  shareUser: {
    flexDirection: 'row',
  },
  shareAvatar: {
    width: 40,
    height: 40
  },
  shareUserInfo: {
    marginLeft: 10,
  },
  shareUserName: {
    marginTop: 3,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  shareUserId: {
    marginTop: 2,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(0, 0, 0, 0.8)'
  },
  input: {
    minHeight: 57,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#EAECF1',
    marginTop: 10,
    lineHeight: 16,
    fontSize: 13,
    textAlignVertical: 'top',
    fontFamily: 'Montserrat-Regular',
  },
  shareBtn: {
    marginTop: 25,
    backgroundColor: '#627BBB',
    width: '100%',
    height: 39,
    borderRadius: 5,
    paddingTop: 8,
    fontFamily: 'Montserrat-Regular',
  },
  shareText: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: 'white',
    alignSelf: 'center',
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  editText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 10
  },
  divider: {
    marginVertical: 10,
    height: 1,
    borderWidth: 0.5,
    borderColor: 'black'
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  uploadText: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 4,
    color: '#8A98AA'
  },
  uploadContainer: {
    marginTop: 12,
    marginBottom: 28,
    flexDirection: 'row',
    alignItems: 'center'
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
  shareInput: {
    backgroundColor: '#EAECF1',
    height: 130,
    width: '100%',
    borderRadius: 8,
    padding: 8,
    marginTop: 20
  },
});
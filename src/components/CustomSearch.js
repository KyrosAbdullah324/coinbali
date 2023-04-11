import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import SearchIcon from '../../assets/images/search.png'

export default ({placeholder, onChange, height = 40, mB=20, mT=22}) => {
  return (
    <View style={{...styles.inputContainer, height: height, marginBottom:mB, marginTop:mT}}>
        <Image source={SearchIcon} style={styles.icon} />
        <TextInput style={{...styles.input}} placeholder={placeholder} onChange={e=>onChange(e.target.value)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // marginBottom: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 32,
    borderWidth: 2,
    borderColor: 'rgba(98, 123, 187, 0.4)',
    borderRadius: 8,
    // marginTop: 22
  },
  icon: {
    width: 13,
    height: 13,
    marginLeft: 13,
    marginRight: 13
  },
  input: {
    width: '100%',
    fontSize: 12,
    letterSpacing: 0.2,
    height: 32,
  },
});
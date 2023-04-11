import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import EtherBackImage from '../../assets/images/etherback.png'
export default ({data, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress()}>
            <Image source={EtherBackImage} style={{width: '100%', height:103}}/>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.desp}>{data.desp}</Text>
            <View style={{position: 'relative', marginTop: 8}}>
                <View style={{height: 8, borderRadius: 20, backgroundColor: '#C4CCE2', width: '100%', position: 'absolute'}}></View>
                <View style={{height: 8, borderRadius: 20, backgroundColor: '#627BBB', width: '30%', position: 'absolute'}}>
            </View>
            <View style={{flexDirection: "row", width: '100%', justifyContent: "flex-start", marginTop: 10}}>
            <Text style={styles.itemtext}>{data.dollar} raised</Text>
            <Text style={{...styles.itemtext, marginLeft: 10}}>{data.dayoff} days left</Text>

            </View>
            <Text style={styles.itemtext}>{data.funded} funded</Text>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      minWidth: 160,
      width: '49%',
      borderColor: '#7189C8',
      borderRadius: 10,
      padding: 4,
      borderWidth: 2,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    title: {
      fontSize: 15,
      lineHeight: 18,
      fontFamily: 'Montserrat-SemiBold',
      marginTop: 8,
    },
    desp: {
        fontSize: 12,
        lineHeight: 15,
        fontFamily: 'Montserrat-Regular',
        marginTop: 8,
    },
    itemtext: {
        fontSize: 10,
        lineHeight: 12,
        fontFamily: 'Montserrat-Medium',
        marginTop: 8,
    }
  
  });
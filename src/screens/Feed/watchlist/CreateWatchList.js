import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SettingTitle from '../../../components/settings/SettingTitle';
import CustomInput from '../../../components/CustomInput';
import CustomToggle from '../../../components/CustomToggle';
import CustomButton from '../../../components/CustomButton';

export default () => {
  const [isToggled, setIsToggled] = useState(false);
  const navigation = useNavigation()
  const handleToggle = () => {
      setIsToggled(!isToggled);
  };
  return (
    <View style={styles.container}>
      <View style = {styles.subcontainer}>
        <SettingTitle title="New WatchList" goWithNavigate={()=>navigation.navigate('WatchList')} backnavigate={true} />
        <CustomInput label='Watchlist Name' placeholder='My Watchlist' onChange={()=>{}} />
        <CustomInput label='Description' placeholder='Description' height={80} multi={true} onChange={()=>{}} />  
        <View style={styles.leftright}>
          <Text style={{flex: 1, fontFamily: 'Montserrat-Medium'}}>Public Watchlist</Text>  
          <CustomToggle></CustomToggle>   
        </View>
      </View>
      <CustomButton label='Create Watchlist' to='WatchList' para = {{flag:true}}/>
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
    paddingBottom: 20
    // fontFamily: 'Montserrat'
  },
  subcontainer: {
    flex: 1,
    width: '100%'
  },
  watchlistname: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Montserrat-Medium',
  },
  watchlistinput: {
    backgroundColor: '#f44336'
  },
  leftright: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  }
});
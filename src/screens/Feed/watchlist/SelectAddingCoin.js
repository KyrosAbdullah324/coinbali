import { useNavigation } from "@react-navigation/core";
import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TextInput, FlatList } from "react-native";
import SettingTitle from "../../../components/settings/SettingTitle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Checkbox } from "react-native-paper";
import SearchIcon from "../../../../assets/images/search.png"

export default() => {
    const navigation = useNavigation();
    return (
        <View style = {styles.container}>
            <SettingTitle title={"Add coins"} goWithNavigate={()=>navigation.goBack()} backnavigate={true} />
            <View style = {styles.leftright}>
                <View style={styles.searchinputContainer}>
                    <Image source={SearchIcon} style={styles.searchicon} />
                    <TextInput style={styles.searchinput} placeholder='Search' />
                </View>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('SelectCoinAdded',{flag:true})} >
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
            </View>
            <FlatList width = {'100%'}
                data={data}
                renderItem={({item}) => (
                <ListItem item={item}  />
                )}
                showsVerticalScrollIndicator={false} // Set this to false
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}


const ListItem = ({item, onCheckboxPress}) => {
    const [checked, setChecked] = useState(false);
  
    return (
      <View style={styles.listitems}>
        <View style={styles.leftitems}>
          <Image source={item.image} style={styles.bitcoin} />
          <Text style={styles.coinname}>{item.name}</Text>
          <Text style={styles.bracket}>{item.symbol}</Text>
        </View>
        <View style={{marginRight: -8}}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
              // onCheckboxPress(item);
            }}
            checkedColor="#627BBB"
            // uncheckedColor="#627BBB"
            
          />
        </View>
      </View>
    );
  };

  

const data = [
    {
      id: '1',
      name: 'Bitcoin',
      symbol: 'BTC',
      image: require('../../../../assets/images/bitcoin.png'), // Replace with the actual path to the image
    },
    {
        id: '2',
        name: 'Ethereum',
        symbol: 'ETH',
        image: require('../../../../assets/images/eth.png'), // Replace with the actual path to the image
      },
      {
        id: '3',
        name: 'Cardano',
        symbol: 'ADA',
        image: require('../../../../assets/images/ada.png'), // Replace with the actual path to the image
      },
      {
        id: '4',
        name: 'BNB',
        symbol: 'BNB',
        image: require('../../../../assets/images/bnb.png'), // Replace with the actual path to the image
      },
      {
        id: '5',
        name: 'Solana',
        symbol: 'SOL',
        image: require('../../../../assets/images/sol.png'), // Replace with the actual path to the image
      },
      {
        id: '6',
        name: 'Polygon',
        symbol: 'MATIC',
        image: require('../../../../assets/images/matic.png'), // Replace with the actual path to the image
      },
      {
        id: '7',
        name: 'XRP',
        symbol: 'XRP',
        image: require('../../../../assets/images/xrp.png'), // Replace with the actual path to the image
      },
      {
        id: '8',
        name: 'Dogecoin',
        symbol: 'DOGE',
        image: require('../../../../assets/images/doge.png'), // Replace with the actual path to the image
      },
      {
        id: '9',
        name: 'Bitcoin Cash',
        symbol: 'BCH',
        image: require('../../../../assets/images/bch.png'), // Replace with the actual path to the image
      },
      {
        id: '10',
        name: 'Tether',
        symbol: 'USDT',
        image: require('../../../../assets/images/usdt.png'), // Replace with the actual path to the image
      },
      {
        id: '11',
        name: 'SHIBA INU',
        symbol: 'SHIB',
        image: require('../../../../assets/images/shib.png'), // Replace with the actual path to the image
      },
      {
        id: '12',
        name: 'Chainlink',
        symbol: 'LINK',
        image: require('../../../../assets/images/link.png'), // Replace with the actual path to the image
      },
    // Add more items here
  ];

  // create Modal
  

  const handleCheckboxPress = (item) => {
    setSelectedItems((prev) => {
      if (prev.includes(item)) {
        return prev.filter((i) => i.id !== item.id);
      } else { 
        return [...prev, item];
      }
    });}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            paddingTop: 44,
            paddingLeft: 24,
            paddingRight: 24,
            // fontFamily: 'Montserrat'
        },
        leftright: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
        },
        listitems: {
            flexDirection: 'row',
            width: '100%',
            marginTop: 14 ,
        },
        searchinputContainer: {
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            height: 32,
            borderWidth: 2,
            borderColor: 'rgba(98, 123, 187, 0.4)',
            borderRadius: 8,
          },
          searchicon: {
            width: 13,
            height: 13,
            marginLeft: 13,
            marginRight: 13
          },
          bitcoin: {
            width: 24,
            height: 24,
          },
          searchinput: {
            width: '70%',
            fontSize: 12,
            letterSpacing: 0.2,
            height: 32,
          },

          addButton: {
            backgroundColor: "#627BBB",
            borderRadius: 5,
            width: 86,
            alignItems: "center",
            justifyContent: "center",
            height: 26,
            marginLeft: 20
          },
          addButtonText: {
            color: "white",
            fontSize: 11,
            fontFamily: 'Montserrat-SemiBold',
          },
          leftitems: {
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1
        },
        coinname: {
            paddingLeft: 16,
            fontSize: 14,

        },
        bracket: {
            color: 'rgba(0, 0, 0, 0.5)',
            fontSize: 14,
            marginLeft: 5
        }
    }
);
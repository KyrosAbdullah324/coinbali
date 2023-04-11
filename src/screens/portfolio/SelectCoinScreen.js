import React, { useState } from "react";
import {
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import SettingTitle from "../../components/settings/SettingTitle";
import CustomSearch from "../../components/CustomSearch";
import CoinItem from "../../components/portfolio/CoinItem";

import BitCoin_Icon from "../../../assets/images/bitcoin.png";
import Ethereum_Icon from "../../../assets/images/ethereum.png";

export default () => {
  const navigation = useNavigation();
  const data = [
    {
      id: '1',
      name: 'Bitcoin',
      symbol: 'BTC',
      image: require('../../../assets/images/bitcoin.png'), // Replace with the actual path to the image
    },
    {
      id: '2',
      name: 'Ethereum',
      symbol: 'ETH',
      image: require('../../../assets/images/eth.png'), // Replace with the actual path to the image
    },
    {
      id: '3',
      name: 'Cardano',
      symbol: 'ADA',
      image: require('../../../assets/images/ada.png'), // Replace with the actual path to the image
    },
    {
      id: '4',
      name: 'BNB',
      symbol: 'BNB',
      image: require('../../../assets/images/bnb.png'), // Replace with the actual path to the image
    },
    {
      id: '5',
      name: 'Solana',
      symbol: 'SOL',
      image: require('../../../assets/images/sol.png'), // Replace with the actual path to the image
    },
    {
      id: '6',
      name: 'Polygon',
      symbol: 'MATIC',
      image: require('../../../assets/images/matic.png'), // Replace with the actual path to the image
    },
    {
      id: '7',
      name: 'XRP',
      symbol: 'XRP',
      image: require('../../../assets/images/xrp.png'), // Replace with the actual path to the image
    },
    {
      id: '8',
      name: 'Dogecoin',
      symbol: 'DOGE',
      image: require('../../../assets/images/doge.png'), // Replace with the actual path to the image
    },
    {
      id: '9',
      name: 'Bitcoin Cash',
      symbol: 'BCH',
      image: require('../../../assets/images/bch.png'), // Replace with the actual path to the image
    },
    {
      id: '10',
      name: 'Tether',
      symbol: 'USDT',
      image: require('../../../assets/images/usdt.png'), // Replace with the actual path to the image
    },
    {
      id: '11',
      name: 'SHIBA INU',
      symbol: 'SHIB',
      image: require('../../../assets/images/shib.png'), // Replace with the actual path to the image
    },
    {
      id: '12',
      name: 'Chainlink',
      symbol: 'LINK',
      image: require('../../../assets/images/link.png'), // Replace with the actual path to the image
    },
    // Add more items here
  ];

  return (
    <View style={styles.container}>
      <SettingTitle
        title={"Select coin"}
        goWithNavigate={() => navigation.navigate("Portfolio")}
        backnavigate={true}
        mB={0}
      />
      <CustomSearch height={32} mT={18} placeholder="Search" />
      <ScrollView
    showsVerticalScrollIndicator={false} style={{width: '100%'}}>
        <View style={styles.content}>
          {data.map(item=>{
            return (<CoinItem key={item.id} icon={item.image} title={item.name} subTitle={item.symbol} to={"AddTransaction"}/>)
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexdirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 44,
    paddingLeft: 24,
    paddingRight: 24,
    // fontFamily: 'Montserrat'
  },
  content: {
    flex: 1,
    width: "100%",
  },
});

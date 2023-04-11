import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from "react-native";

import Plus_Icon from "../../../assets/images/BluePlus.png";
import Share_Icon from "../../../assets/images/blueShare.png";

import { useNavigation } from "@react-navigation/native";
import HoldingTable from "../../components/portfolio/HoldingTable";
import NFTTable from "../../components/portfolio/NFTTable";
import TempChart from "../../components/portfolio/TempChart";

import * as Convert from '../../util';

export default () => {
  const navigation = useNavigation();


  const chartData = [
    [
      29845, 32223, 33153, 32144, 33256, 30982, 29192, 32144, 33256, 30982,
      29992, 30172, 30172, 31823, 31853, 30172, 32144, 31823, 31853,
    ],
    [
      29845, 33256, 30982, 29192, 32144, 33256, 30982, 32345, 30172, 32144,
      31823, 31853, 30172, 31823, 31853, 32223, 33153, 32144, 30172,
    ],
    [
      29845, 32223, 33153, 32144, 33256, 30982, 32345, 30172, 30172, 31823,
      31853, 30172, 32144, 31823, 30982, 29192, 32144, 33256, 31853,
    ],
    [
      29845, 29192, 32144, 33256, 30982, 32345, 30172, 30172, 31823, 31853,
      30172, 32144, 31823, 32223, 33153, 32144, 33256, 30982, 31853,
    ],
    [
      29845, 32223, 33153, 32144, 33256, 30172, 30172, 31823, 31853, 30172,
      32144, 31823, 31853, 30982, 29192, 32144, 33256, 30982, 32345,
    ],
  ];

  const HoldingTableData = [
    {
      id: "1",
      fullName: "Bitcoin",
      abbrName: "BTC",
      amount: 10,
      price: 15000,
      total: 150000,
      profitPercent: -10,
      image: require("../../../assets/images/bitcoin.png"), // Replace with the actual path to the image
    },
    {
      id: "2",
      fullName: "Ethereum",
      abbrName: "ETH",
      amount: 12,
      price: 1200,
      total: 14400,
      profitPercent: -3,
      image: require("../../../assets/images/eth.png"), // Replace with the actual path to the image
    },
    {
      id: "3",
      fullName: "XRP",
      abbrName: "XRP",
      amount: 12000,
      price: 0.04,
      total: 4210,
      profitPercent: +13,
      image: require("../../../assets/images/xrp.png"), // Replace with the actual path to the image
    },
    {
      id: "4",
      fullName: "Cardano",
      abbrName: "ADA",
      amount: 11000,
      price: 0.04,
      total: 14400,
      profitPercent: +12,
      image: require("../../../assets/images/ada.png"), // Replace with the actual path to the image
    },
    {
      id: "5",
      fullName: "BNB",
      abbrName: "BNB",
      amount: 3,
      price: 243.32,
      total: 730.26,
      profitPercent: -2,
      image: require("../../../assets/images/bnb.png"), // Replace with the actual path to the image
    },
    {
      id: "6",
      fullName: "Polygon",
      abbrName: "MATIC",
      amount: 1000,
      price: 0.8033,
      total: 803.30,
      profitPercent: 16,
      image: require("../../../assets/images/matic.png"), // Replace with the actual path to the image
    },
    {
      id: "7",
      fullName: "Solana",
      abbrName: "SOL",
      amount: 50,
      price: 10.99,
      total: 549.5,
      profitPercent: 2,
      image: require("../../../assets/images/sol.png"), // Replace with the actual path to the image
    },
    {
      id: "8",
      fullName: "USD Coin",
      abbrName: "USDC",
      amount: 325,
      price: 10001,
      total: 325.03,
      profitPercent: -5,
      image: require("../../../assets/images/usdc.png"), // Replace with the actual path to the image
    },

    {
      id: "9",
      fullName: "Dogecoin",
      abbrName: "DOGE",
      amount: 2500,
      price: 0.07189,
      total: 179.02,
      profitPercent: +12,
      image: require("../../../assets/images/doge.png"), // Replace with the actual path to the image
    },
  ];

  const NFTTableData = [
    {
      id: "1",
      name: "CoolCat",
      amount: 1,
      price: 304,
      total: 304,
      image: require("../../../assets/images/NFT_coolcat.png"), // Replace with the actual path to the image
    },
    {
      id: "2",
      name: "CryptoPUNK",
      amount: 1,
      price: 101,
      total: 101,
      image: require("../../../assets/images/NFT_crypto.png"), // Replace with the actual path to the image
    },
    {
      id: "3",
      name: "Iseka Meta",
      amount: 1,
      price: 5,
      total: 5,
      image: require("../../../assets/images/NFT_iseka.png"), // Replace with the actual path to the image
    },
  ];

  const btnLabels = ['24h', '7d', '30d', '90d', 'All'];
  const [data, setData] = useState(chartData[0]);
  const [btn, setBtn] = useState(0);
  const handleButtonClick = (i) => {
    setBtn(i);
    setData(chartData[i]);
  };

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{ ...styles.section, marginTop: 19 }}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Holdings</Text>
            <View style={styles.sectionActions}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SharePortfolio");
                }}
              >
                <View style={styles.iconContainer}>
                  <Image source={Share_Icon}></Image>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SelectCoin");
                }}
              >
                <View style={styles.iconContainer}>
                  <Image source={Plus_Icon}></Image>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sectionContent}>
            <HoldingTable data={HoldingTableData} />
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>NFT</Text>
            <View style={styles.sectionActions}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SharePortfolio");
                }}
              >
                <View style={styles.iconContainer}>
                  <Image source={Share_Icon}></Image>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SelectCoin");
                }}
              >
                <View style={styles.iconContainer}>
                  <Image source={Plus_Icon}></Image>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sectionContent}>
            <NFTTable data={NFTTableData} />
          </View>
        </View>
        <View style={styles.section}>
          <View>
            <Text style={styles.sectionTitle}>Charts</Text>
          </View>
          <View style={{ marginTop: 8 }}>
            <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 20, lineHeight: 24 }}>
              {Convert.formatCurrencyFixed2(data[data.length -1])}
            </Text>
            <Text
              style={{
                fontFamily: 'Montserrat-Medium',
                fontSize: 14,
                lineHeight: 17,
                color: (data[data.length-1] - data[0]>=0)?"#179D25":"#E24040",
                marginTop: 3,
                marginBottom: 8
              }}
            >
              {Convert.formatSignedPercent(Convert.formatFixed2((data[data.length-1] - data[0])/data[0]))}
            </Text>
            <TempChart data={data}/>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                height: 25,
                backgroundColor: "#ffffff",
                marginTop: -10,
                marginBottom: 24,
              }}
            >
              {btnLabels.map((label, index)=>{
                return (<TouchableOpacity
                  key={label}
                  onPress={() => {
                    handleButtonClick(index);
                  }}
                  style={[styles.chartButton, btn==index&&styles.selectedButton]}
                >
                  <Text style={{ fontSize: 11, fontFamily: 'Montserrat-SemiBold' }}>{label}</Text>
                </TouchableOpacity>);
              })}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 44,
    paddingLeft: 24,
    paddingRight: 24,
    columnGap: 10,
    rowGap: 43,
    // fontFamily: 'Montserrat'
  },

  section: {
    width: "100%",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionTitle: {
    flex: 1,
    fontStyle: "normal",
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 20,
    color: "#060606",
  },
  sectionActions: {
    flexDirection: "row",
    columnGap: 20,
  },
  iconContainer: {
    width: 24,
    height: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionContent: {
    marginTop: 15,
  },

  chartButton: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    height: 25,

    color: "#000000",
    backgroundColor: "transparent",
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: "rgba(98, 123, 187, 0.14)",
  },
});

import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

import LeftPassiveIcon from "../../../assets/images/left_passive.png";
import RightActiveIcon from "../../../assets/images/right_active.png";
import BitCoinWithHand from "../../../assets/images/bitcoinwithhand.png";

import CustomLiftOffCard from "../../components/CustomLiftOffCard";
import CustomSearch from "../../components/CustomSearch";
import TempCarousel from "../../components/TempCarousel";

export default ({ navigation }) => {
  const data = [
    {
      title: "Investing into Ethereum",
      desp: "Raising funds for investing into Ethereum.",
      dollar: "$4,000",
      dayoff: "12",
      funded: "40%",
    },
    {
      title: "Investing into Ethereum",
      desp: "Raising funds for investing into Ethereum.",
      dollar: "$4,000",
      dayoff: "12",
      funded: "40%",
    },
    {
      title: "Investing into Ethereum",
      desp: "Raising funds for investing into Ethereum.",
      dollar: "$4,000",
      dayoff: "12",
      funded: "40%",
    },
    {
      title: "Investing into Ethereum",
      desp: "Raising funds for investing into Ethereum.",
      dollar: "$4,000",
      dayoff: "12",
      funded: "40%",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.containerview}>
        <View style={styles.imageWrapper}>
          <Image source={BitCoinWithHand} style={styles.image} />
          <View style={[styles.overlay, styles.overlay1]} />
          <View style={[styles.overlay, styles.overlay2]} />
          <View style={[styles.overlay, styles.overlay3]} />
          <Text style={styles.text1}>Create your Liftoff</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("CreateNewLiftoff");
            }}
          >
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>
        <CustomSearch placeholder="Search" onChange={() => {}} height={32} />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 8,
              marginBottom:5,
            }}
          >
            <TempCarousel />
          </View>
        </View>
        <ScrollView
    showsVerticalScrollIndicator={false}>
          <View style={{paddingTop: 30, marginBottom: 100}}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 14,
              }}
            >
              <CustomLiftOffCard
                data={data[0]}
                onPress={() =>
                  navigation.navigate("DetailLiftoff", { data: data[0] })
                }
              />
              <CustomLiftOffCard
                data={data[1]}
                onPress={() =>
                  navigation.navigate("DetailLiftoff", { data: data[1] })
                }
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 14,
              }}
            >
              <CustomLiftOffCard
                data={data[2]}
                onPress={() =>
                  navigation.navigate("DetailLiftoff", { data: data[2] })
                }
              />
              <CustomLiftOffCard
                data={data[3]}
                onPress={() =>
                  navigation.navigate("DetailLiftoff", { data: data[3] })
                }
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 14,
              }}
            >
              <CustomLiftOffCard
                data={data[2]}
                onPress={() =>
                  navigation.navigate("DetailLiftoff", { data: data[2] })
                }
              />
              <CustomLiftOffCard
                data={data[3]}
                onPress={() =>
                  navigation.navigate("DetailLiftoff", { data: data[3] })
                }
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 66,
    paddingLeft: 24,
    paddingRight: 24,
    // fontFamily: 'Montserrat'
  },
  containerview: {
    marginBottom: 76,
  },
  text1: {
    fontSize: 12,
    lineHeight: 15,
    fontFamily: 'Montserrat-Medium',
    color: "#A4B1D1",
    position: "absolute",
    top: 22,
    left: 14,
    right: 0,
    bottom: 0,
  },
  imageWrapper: {
    width: "100%",
    position: "relative",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 82,
    borderRadius: 10,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlay1: {
    backgroundColor: "rgba(15, 15, 70, 0.104)",
  },
  overlay2: {
    backgroundColor: "rgba(237, 242, 255, 0.584)",
    opacity: 0.5,
  },
  overlay3: {
    backgroundColor: "rgba(205, 223, 234, 0.8)",
    opacity: 0.7,
  },
  button: {
    backgroundColor: "#627BBB",
    borderRadius: 5,
    width: "22%",
    alignItems: "center",
    position: "absolute",
    top: 49,
    left: 14,
    right: 0,
    bottom: 0,
    height: 26,
  },
  buttonText: {
    color: "white",
    fontSize: 11,
    lineHeight: 13,
    fontFamily: 'Montserrat-Bold',
    marginTop: 5,
  },
  button1: {
    backgroundColor: "#627BBB",
    borderRadius: 50,
    alignItems: "center",
  },
  button1Text: {
    backgroundColor: "#627BBB",
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: "center",
    color: "white",
    fontSize: 11,
    lineHeight: 13,
    fontFamily: 'Montserrat-Bold',
  },
  button2: {
    backgroundColor: "#D2D9EB",
    borderRadius: 50,
    alignItems: "center",
  },
  button2Text: {
    backgroundColor: "#D2D9EB",
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: "center",
    color: "#000000",
    fontSize: 11,
    lineHeight: 13,
    fontFamily: 'Montserrat-Bold',
  },
});

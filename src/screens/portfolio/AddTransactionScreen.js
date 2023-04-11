import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../components/CustomInput";
import CustomSelect from "../../components/CustomSelect";
import CustomButton from "../../components/CustomButton";
import Left_Img from "../../../assets/images/Left.png";
import BitCoin_Icon from "../../../assets/images/bitcoin.png";
import Ethereum_Icon from "../../../assets/images/ethereum.png";

export default () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("SelectCoin")}
        >
          <Image source={Left_Img} style={styles.leftImg} />
        </TouchableOpacity>
        <View style={styles.title}>
          <View style={styles.titleIcon}>
            <Image source={BitCoin_Icon} />
          </View>

          <Text style={styles.txtTitle}>Bitcoin</Text>
          <Text style={styles.txtSubTitle}>BTC</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.nameContanier}>
          <View style={{ width: "40%" }}>
            <CustomInput label="Amount" placeholder="1" onChange={() => {}} />
          </View>
          <View style={{ width: "58%" }}>
            <CustomInput
              label="Price Per Coin"
              placeholder="$ 16551,85"
              onChange={() => {}}
            />
          </View>
        </View>
        <View style={styles.nameContanier}>
          <View style={styles.halfContainer}>
            <CustomSelect
              label={"Date"}
              placeholder={"Date"}
              icon="note"
              optionList={[]}
              handleSelect={() => {}}
              selectedOption={null}
            />
          </View>
          <View style={styles.halfContainer}>
            <CustomSelect
              label={"Time"}
              placeholder={"Time"}
              optionList={[]}
              handleSelect={() => {}}
              selectedOption={null}
            />
          </View>
        </View>
        <View style={styles.spent}>
          <Text style={styles.spentTitle}>Total Spent</Text>
          <View style={styles.spentContent}>
            <Text style={styles.spentAmount}>$ 16551,85</Text>
          </View>
        </View>
      </View>
      <View style={{ width: "100%", marginBottom: 36 }}>
        <CustomButton label={"Add transaction"} to={"ShowPortfolio"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexdirection: "column",
    backgroundColor: "#fff",
    aligntitles: "center",
    paddingTop: 44,
    paddingLeft: 24,
    paddingRight: 24,
    // fontFamily: 'Montserrat'
  },
  topbar: {
    position: "relative",
    height: 24,
    marginTop: 16,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 28,
  },
  backButton: {
    position: "absolute",
    left: 0,
  },
  leftImg: {
    width: 24,
    height: 24,
  },
  title: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    zIndex: -1,
  },
  titleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  txtTitle: {
    height: 24,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.2,
    marginRight: 10,
  },
  txtSubTitle: {
    height: 24,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.2,
    color: "#00000080",
  },

  formContainer: {
    width: "100%",
    flex: 1,
  },
  nameContanier: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  halfContainer: {
    width: "49%",
  },
  spent: {
    marginTop: 12,
  },
  spentTitle: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    height: 16,
    lineHeight: 16,
  },
  spentContent: {
    width: "100%",
    backgroundColor: "#E9ECF1",
    borderRadius: 8,
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 0,
    paddingBottom: 20,
    paddingLeft: 8,
    marginTop: 8,
  },
  spentAmount: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    lineHeight: 20,
  },
});

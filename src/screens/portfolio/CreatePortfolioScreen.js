import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

import SearchZoomIn_Icon from "../../../assets/images/search-zoom-in.png";

export default () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.createIcon}>
          <Image source={SearchZoomIn_Icon}></Image>
        </View>
        <Text style={styles.success}>Your portfolio is empty</Text>
        <Text style={styles.successText}>
          Create your portfolio to track your profits and losses
        </Text>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("SelectCoin")}
      >
        <Text style={styles.loginButtonText}>{"Create your portfolio"}</Text>
      </TouchableOpacity>
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  createIcon: {
    width: 99,
    height: 99,
    backgroundColor: "#F2F3FA",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  success: {
    height: 20,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 20,
    /* identical to box height */
    letterSpacing: 0.2,
    color: "#000000",
    marginTop: 39,
  },
  successText: {
    height: 34,
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    lineHeight: 17,
    /* identical to box height */
    letterSpacing: 0.2,
    color: "rgba(0, 0, 0, 0.6)",
    marginTop: 15,
    textAlign: "center",
    paddingHorizontal: 30,
  },
  loginButton: {
    backgroundColor: "#627BBB",
    padding: 10,
    borderRadius: 5,
    marginTop: 21,
    marginBottom: 36,
    width: "100%",
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
});

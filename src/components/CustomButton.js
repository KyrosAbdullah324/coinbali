import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default ({ label, to , para}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.loginButton}
      onPress={() => {
        console.log(para)
        if(para??true)
        navigation.navigate(to, para);
        else 
        navigation.navigate(to);
      }}
    >
      <Text style={styles.loginButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: "#627BBB",
    padding: 10,
    borderRadius: 5,
    marginTop: 21,
    width: "100%",
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
});

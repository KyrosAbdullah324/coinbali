import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Right_Vector from "../../../assets/images/RightVector.png";

export default SettingItem = ({ icon, title, subTitle='Eth', to='AddTransaction', underline=true }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(to)}>
      <View id={title} style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.itemIcon}>
            <Image source={icon} />
          </View>
          <View style={styles.itemTitle}>
            <Text style={styles.txtTitle}>{title}</Text>
            <Text style={styles.txtSubTitle}>{subTitle}</Text>
          </View>
        </View>
        <View style={styles.itemIcon}>
          <Image source={Right_Vector} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    paddingTop: 14,
    paddingBottom: 14,
    height: 52,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },

  itemLeft: {
    flex: 1,
    flexDirection: "row",
  },
  itemTitle: {
    flexDirection: "row",
    paddingLeft: 21,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  txtTitle: {
    // font-family: Montserrat,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 16,
    letterSpacing: 0.2,
  },
  txtSubTitle: {
    // font-family: Montserrat,
    paddingLeft: 5,
    textTransform: 'uppercase',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    lineHeight: 16,
    letterSpacing: 0.2,
    color: "#00000080",
  },
  itemIcon: {
    width: 24,
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

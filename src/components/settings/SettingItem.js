import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import Right_Vector from "../../../assets/images/RightVector.png";

export default SettingItem = ({ icon, title, to }) => {
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
    paddingTop: 10,
    paddingBottom: 10,
    height: 44,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },

  itemLeft: {
    flex: 1,
    flexDirection: "row",
  },
  itemTitle: {
    paddingLeft: 12,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  txtTitle: {
    // font-family: Montserrat,
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    lineHeight: 17,
    letterSpacing: 0.2,
  },
  itemIcon: {
    width: 24,
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

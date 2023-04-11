import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import CustomToggle from "../CustomToggle";
export default SettingNotificationItem = ({ title, description }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.notiItem}>
      <View style={styles.notiItemLeft}>
        <Text style={styles.notiItemTitle}>{title}</Text>
        <Text style={styles.notiItemDesc}>{description}</Text>
      </View>
      <CustomToggle />
    </View>
  );
};

const styles = StyleSheet.create({
  notiItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  notiItemLeft: {
    flex: 1,
    flexDirection: "column",
  },

  notiItemTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "black",
  },
  notiItemDesc: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 0.2,
    color: "black",
    marginTop: 10,
    marginBottom: 20,
  },
  switch: {},
});

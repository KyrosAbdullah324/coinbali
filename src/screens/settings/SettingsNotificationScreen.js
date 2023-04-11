import React from "react";
import { View, Text, StyleSheet } from "react-native";

import SettingTitle from "../../components/settings/SettingTitle";
import SettingNotificationItem from "../../components/settings/SettingNotificationItem";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <SettingTitle title="Notification Settings" goWithNavigate={()=>navigation.navigate('Settings')} backnavigate={true} />
      <Text style={styles.caption}>Notify me when</Text>
      <SettingNotificationItem
        title="Follows"
        description={"Someone follows me"}
      />
      <SettingNotificationItem
        title="Likes"
        description={"Someone likes my post"}
      />
      <SettingNotificationItem
        title="Replies"
        description={"Someone comments my post or replies on my comment"}
      />
      <SettingNotificationItem
        title="Reposts"
        description={"Someone reposts my post"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    paddingTop: 44,
    paddingLeft: 24,
    paddingRight: 24,
    // fontFamily: 'Montserrat'
  },
  caption: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 0.2,
    color: "#000",
    marginTop: 2,
    marginBottom: 13,
  },
});

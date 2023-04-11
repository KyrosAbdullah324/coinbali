import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Left_Img from "../../../assets/images/Left.png";
import Profile_Icon from "../../../assets/images/UserEdit.png";
import Notificaion_Icon from "../../../assets/images/Bell.png";
import KYC_Icon from "../../../assets/images/ShieldTick.png";
import Right_Vector from "../../../assets/images/RightVector.png";

import { useNavigation } from "@react-navigation/native";
import SettingTitle from "../../components/settings/SettingTitle";
import SettingItem from "../../components/settings/SettingItem";

export default () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SettingTitle title="Settings" goWithNavigate={()=>navigation.goBack()} backnavigate={true} />
      <View style={styles.settingContent}>
        <SettingItem
          icon={Profile_Icon}
          title="Profile"
          to="Settings/Profile"
        />
        <SettingItem
          icon={Notificaion_Icon}
          title="Notifications"
          to="Settings/Notifications"
        />
        <SettingItem
          icon={KYC_Icon}
          title="KYC verification"
          to="Settings/Kyc"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 44,
    paddingLeft: 24,
    paddingRight: 24,
    // fontFamily: 'Montserrat'
  },
  settingContent: {
    boxSizing: "border-box",
    width: "100%",
  },
});

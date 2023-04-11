import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";

import SettingTitle from "../../components/settings/SettingTitle";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SettingTitle title="KYC verification" goWithNavigate={()=>navigation.navigate('Settings')} backnavigate={true} />
      <Text style={styles.caption}>
        We are required to identify users on our platform to use all features
      </Text>
      <Text style={styles.kycItem}>1.Verify personal information</Text>
      <Text style={styles.kycItem}>2.Verify your ID</Text>
      <View style={styles.bottomFixed}>
        <CustomButton label={"Start"} to={"Settings/Kyc/BasicInfo"} />
      </View>
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
    position: "relative",
  },
  caption: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 0.2,
    color: "#000",
    marginTop: 2,
    marginBottom: 2,
  },
  kycItem: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.2,
    color: "#000",
    marginTop: 22,
  },
  bottomFixed: {
    //TODO: remove left value so that perfect for responsive
    position: "absolute",
    left: 24,
    bottom: 46,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

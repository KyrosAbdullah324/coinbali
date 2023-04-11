import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../../components/CustomInput";
import SettingTitle from "../../../components/settings/SettingTitle";

export default ({ setStep }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SettingTitle
        title="KYC verification"
        goWithNavigate={() => navigation.navigate("Settings/Kyc")}
        backnavigate={true}
      />
      <ScrollView
    showsVerticalScrollIndicator={false} style={styles.formContainer}>
        <Text style={styles.topic}>1.Basic info</Text>
        <CustomInput label="Name" placeholder="Full name" onChange={() => {}} />
        <CustomInput
          label="Date of Birth"
          placeholder="MM/DD/YYYY"
          onChange={() => {}}
        />
        <CustomInput
          label="Country"
          placeholder="Country"
          onChange={() => {}}
          value={"USA"}
        />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone</Text>
          <View style={{ position: "relative" }}>
            <TextInput
              style={{ ...styles.input, paddingLeft: 35 }}
              placeholder={"Phone No"}
              onChange={() => {}}
            />
            <Text
              style={{
                position: "absolute",
                paddingRight: 5,
                borderRightWidth: 1,
                top: 10,
                left: 8,
              }}
            >
              +1
            </Text>
          </View>
        </View>
        <CustomInput label="City" placeholder="City" onChange={() => {}} />
        <CustomInput
          label="Address"
          placeholder="Residental address"
          onChange={() => {}}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Settings/Kyc/IDVerification")}
        >
          <Text style={styles.loginButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 44,
    paddingLeft: 24,
    paddingRight: 24,
    // fontFamily: 'Montserrat'
  },
  imageSection: {
    flexDirection: "column",
    alignItems: "center",
  },
  topic: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    lineHeight: 20,
    /* identical to box height */

    letterSpacing: 0.2,
    marginBottom: 21,
    color: "#000000",
  },
  formContainer: {
    width: "100%",
  },
  loginButton: {
    backgroundColor: "#627BBB",
    padding: 10,
    borderRadius: 5,
    // marginTop: 21,
    width: "100%",
    alignItems: "center",
    marginBottom: 21,
    marginTop: 69,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  inputContainer: {
    marginBottom: 20,
    width: "100%",
  },
  label: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#627BBB",
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 8,
    width: "100%",
    fontSize: 14,
    height: 40,
  },
});

import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Avatar_Img from "../../../assets/images/avatar.png";

import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../components/CustomInput";
import SettingTitle from "../../components/settings/SettingTitle";
import SettingItem from "../../components/settings/SettingItem";
import AsteriskPasswordInput from "../../components/CustomPasswordInput";

export default () => {
  const navigation = useNavigation();

  const profileData = {
    firstname:'Daniel',
    lastname: 'Neal',
    Username: 'danielneal',
    Occupation: 'Student | Computer Engineering',
    Country: 'USA',
    City: 'South Dakota',
    Bio: 'I am a student of Computer Engineering, currently in my 4th and final year, I am single and searching for someone special, I have been interested in finance and will love the opportunity to learn and grow with this platform.',
  }
  const accountData={
    email:'danielneal@mail.com',
    password:'*********',
  }

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <SettingTitle title="Profile" goWithNavigate={()=>navigation.navigate('Settings')} backnavigate={true} />
        <View style={styles.imageSection}>
          <Image source={Avatar_Img} style={styles.avatar}></Image>
          <TouchableOpacity onPress={() => console.log("Replace image")} style={{width:'100%'}}>
            <Text style={styles.replaceButton}>Replace image</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.nameContanier}>
            <View style={styles.halfContainer}>
              <CustomInput
                label="First name"
                placeholder="First name"
                onChange={() => {}}
                defvalue={profileData.firstname}
              />
            </View>
            <View style={styles.halfContainer}>
              <CustomInput
                label="Last name"
                placeholder="Last name"
                onChange={() => {}}
                defvalue={profileData.lastname}
              />
            </View>
          </View>
          <CustomInput
            label="Username"
            placeholder="Username"
            onChange={() => {}}
            value={"danielneal"}
            defvalue={profileData.Username}
            />
          <CustomInput
            label="Occupation"
            placeholder="Occupation"
            onChange={() => {}}
            defvalue={profileData.Occupation}
            />
          <View style={styles.nameContanier}>
            <View style={styles.halfContainer}>
              <CustomInput
                label="Country"
                placeholder="Country"
                onChange={() => {}}
                defvalue={profileData.Country}
              />
            </View>
            <View style={styles.halfContainer}>
              <CustomInput
                label="City"
                placeholder="City"
                onChange={() => {}}
                defvalue={profileData.City}
              />
            </View>
          </View>
          <CustomInput
            label="Bio"
            placeholder="Occupation"
            multi={true}
            height={500}
            onChange={() => {}}
            defvalue={profileData.Bio}
            />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.loginButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <SettingTitle title="Account information" />
          <CustomInput
            label="Email address"
            placeholder="Email"
            onChange={() => {}}
            value={"danielneal@mail.com"}
            defvalue={accountData.email}
            />
          {/* <View style={{ ...styles.inputContainer, marginBottom: 14 }}>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} secureTextEntry={true} defaultValue={accountData.password}/>
          </View> */}
          <AsteriskPasswordInput label="Password" defvalue={'danielneal'} placeholder="password"/>
          <TouchableOpacity
            style={{ ...styles.loginButton, width: 208, marginBottom: 28 }}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.loginButtonText}>Change password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  imageSection: {
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  replaceButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    width: 127,
    height: 26,
    borderWidth: 1,
    borderColor: "#627BBB",
    borderRadius: 5,
    color: "black",

    fontSize: 11,
    lineHeight:26,
    letterSpacing: 0.2,
    fontFamily: 'Montserrat-SemiBold',
    color: "#365195",
    textAlign: "center",

    marginBottom: 22,
  },
  formContainer: {
    width: "100%",
  },
  nameContanier: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  halfContainer: {
    width: "48%",
  },
  loginButton: {
    backgroundColor: "#627BBB",
    padding: 10,
    borderRadius: 5,
    // marginTop: 21,
    width: "100%",
    alignItems: "center",
    marginBottom: 21,
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

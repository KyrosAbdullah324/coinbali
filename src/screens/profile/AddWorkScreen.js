import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Delete_Img from "../../../assets/images/reddelete.png";

import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../components/CustomInput";
import SettingTitle from "../../components/settings/SettingTitle";
import CustomSelect from "../../components/CustomSelect";

export default () => {
  const navigation = useNavigation();
  const editFlag = useState(true);
  return (
      <View style={styles.container}>
        <SettingTitle title={editFlag ? "Edit Work Experience" : "Add Work Experience"} goWithNavigate={()=>navigation.goBack()} backnavigate={true} />
        <View style={styles.formContainer}>
          <CustomInput
            label="Company / Organization"
            placeholder="Company / Organization"
            onChange={() => {}}
            value=''
          />
          <View style={styles.nameContanier}>
            <View style={styles.halfContainer}>
              <CustomInput
                label="Country"
                placeholder="Country"
                onChange={() => {}}
              />
            </View>
            <View style={styles.halfContainer}>
              <CustomInput
                label="City"
                placeholder="City"
                onChange={() => {}}
              />
            </View>
          </View>
          <CustomInput
            label="Position"
            placeholder="Position"
            onChange={() => {}}
            value={""}
          />
          <View style={styles.nameContanier}>
            <View style={styles.halfContainer}>
              <CustomSelect label='Starting From' placeholder='Month'  optionList={[]} handleSelect={() => {}} selectedOption={null}/>
            </View>
            <View style={styles.halfContainer}>
              <CustomSelect label='' placeholder='Year'  optionList={[]} handleSelect={() => {}} selectedOption={null}/>
            </View>
          </View>
          <View style={styles.nameContanier}>
            <View style={styles.halfContainer}>
              <CustomSelect label='Ending In' placeholder='Month'  optionList={[]} handleSelect={() => {}} selectedOption={null}/>
            </View>
            <View style={styles.halfContainer}>
              <CustomSelect label='' placeholder='Year'  optionList={[]} handleSelect={() => {}} selectedOption={null}/>
            </View>
          </View>
          <CustomInput
            label="Description"
            placeholder="Description"
            multi={true}
            height={70}
            onChange={() => {}}
          />
          <View style={styles.deleteContainer}>
            {
              editFlag &&
              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => navigation.goBack()}
              >
                <Image source={Delete_Img} style={styles.deleteImg} />
                <Text style={styles.deleteEducationText}>Delete Work Experience</Text>
              </TouchableOpacity>
            }
          </View>
          <View style={styles.btnGroup}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.loginButtonText}>{editFlag ? "Save changes" : "Add Work Experience"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.loginButton, {backgroundColor: 'white'}]}
              onPress={() => navigation.goBack()}
            >
              <Text style={[styles.loginButtonText, {color: '#365195'}]}>Cancel</Text>
            </TouchableOpacity>
          </View>
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
    paddingHorizontal: 20,
    paddingVertical: 5,

    width: 127,
    height: 26,
    borderWidth: 1,
    borderColor: "#627BBB",
    borderRadius: 5,
    color: "black",

    fontSize: 11,
    lineHeight: 16,
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
    marginBottom: 4,
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
  btnGroup: {
    marginTop: 21
  },
  deleteContainer: {
    height: 24,
  },
  deleteBtn: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  deleteImg: {
    width: 24,
    height: 24
  },
  deleteEducationText: {
    color: "#DC6A6A",
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  }
});

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
      <SettingTitle title="Add Skills" goWithNavigate={()=>navigation.goBack()} backnavigate={true} />
      <View style={styles.formContainer}>
        {/* Please ref react-native-dropdown-select-list */}
        <View style={styles.skillsContainer}>
          <Text style={styles.skillText}>financial analytics</Text>
          <Text style={styles.skillText}>mapping</Text>
          <Text style={styles.skillText}>Python</Text>
          <Text style={styles.skillText}>c++</Text>
          <Text style={styles.skillText}>Java</Text>
          <TextInput style={{width: 100}}/>
        </View>
        <View style={{marginTop: 14}}>
          <Text style={styles.skillDes}>Add up to 20 skills. Use a comma to separate skills.</Text>
        </View>
      </View>
      <View style={styles.btnGroup}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.loginButtonText}>Add Skills</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.loginButton, {backgroundColor: 'white'}]}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.loginButtonText, {color: '#365195'}]}>Cancel</Text>
        </TouchableOpacity>
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
    paddingBottom: 24,
    // fontFamily: 'Montserrat'
  },
  formContainer: {
    width: "100%",
    flex: 1,
  },
  skillDes: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
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
  btnGroup: {
    marginTop: 21,
    width: '100%'
  },
  skillsContainer: {
    borderWidth: 1,
    borderColor: '#627BBB',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 10,
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "flex-start",
    height: 193
  },
  skillText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 100,
    backgroundColor: "#E0E6F3",
    marginBottom: 10,
    marginRight: 10,
  },
});

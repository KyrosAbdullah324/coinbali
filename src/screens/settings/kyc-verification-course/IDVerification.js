import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  StatusBar,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import SettingTitle from "../../../components/settings/SettingTitle";
import { Image } from "react-native";

import IdCard_Icon from "../../../../assets/images/IDCard.png";
import DriverLicense_Icon from "../../../../assets/images/DriverLicense.png";
import Passport_Icon from "../../../../assets/images/Passport.png";
import Upload_Icon from "../../../../assets/images/upload.png";
import Verify_Icon from "../../../../assets/images/Verify.png";
import { ScrollView } from "react-native-gesture-handler";

export default ({ setStep }) => {
  const navigation = useNavigation();

  const [id, setId] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [statusBarColor, setStatusBarColor] = useState("transparent");
  useEffect(() => {
    if (showModal) {
      setStatusBarColor("rgba(0,0,0,0.5)");
    } else {
      setStatusBarColor("transparent");
    }
  }, [showModal]);
  const handleModalClose = () => {
    setStatusBarColor("transparent"); // Set the status bar color to white when the modal is closed//TODO:Status Bar
    setShowModal(false);
  };
  return (
    <View style={styles.container}>
      <SettingTitle
        title="KYC verification"
        goWithNavigate={() => navigation.goBack()}
        backnavigate={true}
      />
      <ScrollView
    showsVerticalScrollIndicator={false} style={styles.formContainer}>
        <Text style={styles.topic}>2.Verify your ID</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTopicSelected}>Select your ID type</Text>
          <View style={styles.sectionContent}>
            <TouchableOpacity style={{...styles.idType, ...(id==0&&styles.idTypeSelected)}} onPress={()=>setId(0)}>
              <View style={styles.idImageSection}>
                <Image source={IdCard_Icon} style={styles.idTypeIcon}></Image>
              </View>
              <Text style={{...styles.sectionTopic, ...(id==0&&styles.sectionTopicSelected)}}>ID Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.idType, ...(id==1&&styles.idTypeSelected)}} onPress={()=>setId(1)}>
              <View style={styles.idImageSection}>
                <Image
                  source={DriverLicense_Icon}
                  style={styles.idTypeIcon}
                ></Image>
              </View>
              <Text style={{...styles.sectionTopic, ...(id==1&&styles.sectionTopicSelected)}} adjustsFontSizeToFit numberOfLines={1}>Driver's License</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.idType, ...(id==2&&styles.idTypeSelected)}} onPress={()=>setId(2)}>
              <View style={styles.idImageSection}>
                <Image source={Passport_Icon} style={styles.idTypeIcon}></Image>
              </View>
              <Text style={{...styles.sectionTopic, ...(id==2&&styles.sectionTopicSelected)}}>Passport</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTopicSelected}>
            Upload a photo of the front of your ID card
          </Text>
          <View style={styles.sectionContent_1}>
            <TouchableOpacity onPress={() => {}}>
              <Image source={Upload_Icon}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTopicSelected}>
            Upload a photo of the back of your ID card
          </Text>
          <View style={styles.sectionContent_1}>
            <TouchableOpacity onPress={() => {}}>
              <Image source={Upload_Icon}></Image>
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionNote}>
            * Photo should be clearly readable
          </Text>
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            setShowModal(true);
          }}
        >
          <Text style={styles.loginButtonText}>Confirm and Submit</Text>
        </TouchableOpacity>
      </ScrollView>
      {/* {showModal && (
          <StatusBar
            translucent={true}
            backgroundColor={statusBarColor}
            barStyle="dark-content"
          />
        )} */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={handleModalClose}
        dropdownStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalIcon}>
              <Image source={Verify_Icon}></Image>
            </View>
            <Text style={styles.success}>Successful!</Text>
            <Text style={styles.successText}>Your Id has been verified.</Text>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={()=>{
                handleModalClose();
                navigation.navigate('Settings');
              }}
            >
              <Text style={styles.loginButtonText}>Back to profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  formContainer: {
    width: "100%",
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
  section: {
    width: "100%",
    marginBottom: 28,
  },
  sectionTopic: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    lineHeight: 15,
    /* identical to box height */
    marginBottom: 13,
    color: "#000000",
  },
  sectionTopicSelected: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    lineHeight: 17,
    /* identical to box height */
    letterSpacing: 0.2,
    marginBottom: 13,
    color: "#000000",
  },
  sectionContent: {
    flexDirection: "row",
    columnGap:8,
    width: "100%",
  },
  sectionContent_1: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#365195",
    borderRadius: 10,
    width: "100%",
    height: 192,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionNote: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    lineHeight: 17,
    /* identical to box height */
    letterSpacing: 0.2,
    color: "#000000",
    marginTop: 12,
  },
  idType: {
    flex: 1,
    flexShrink:0,
    flexDirection: "column",
    alignItems: "center",
    width: 104,
    height: 73,
    borderWidth: 1,
    borderColor: "#8FA3D6",
    borderRadius: 10,
    paddingVertical: 12,
  },
  idTypeSelected: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: 102,
    height: 73,
    borderWidth: 2,
    borderColor: "#8FA3D6",
    borderRadius: 10,
    paddingVertical: 12,
  },
  idImageSection: {
    width: 24,
    height: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  idTypeIcon: {},
  loginButton: {
    backgroundColor: "#627BBB",
    padding: 10,
    borderRadius: 5,
    // marginTop: 21,
    width: "100%",
    alignItems: "center",
    marginBottom: 35,
    marginTop: 1,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingLeft: 24,
    paddingRight: 24,
  },
  modalContent: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: "100%",
    height: 346,
    paddingTop: 43,
    paddingBottom: 41,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 10,
  },
  modalIcon: {
    width: 92,
    height: 92,
    backgroundColor: "#F2F3FA",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  success: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 24,
    lineHeight: 29,
    /* identical to box height */
    letterSpacing: 0.2,
    color: "#365195",
    marginTop: 20,
  },
  successText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    lineHeight: 20,
    /* identical to box height */
    letterSpacing: 0.2,
    color: "rgba(0, 0, 0, 0.73)",
    marginTop: 8,
    marginBottom: 31,
  },
});

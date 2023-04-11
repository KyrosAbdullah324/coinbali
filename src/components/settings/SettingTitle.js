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

import { useNavigation } from "@react-navigation/native";

export default SettingTitle = ({ title, goWithNavigate, backnavigate, mB=28, mT=16}) => {
  const navigation = useNavigation();

  return (
    <View style={{...styles.topbar, marginBottom:mB, marginTop:mT}}>
      {backnavigate && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={goWithNavigate}
        >
          <Image source={Left_Img} style={styles.leftImg} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topbar: {
    position: "relative",
    height: 24,
    marginTop: 16,
    width: "100%",
    flexDirection: "row",
    marginBottom: 28,
  },
  backButton: {
    position: "absolute",
    left: 0,
  },
  leftImg: {
    width: 24,
    height: 24,
  },
  title: {
    fontStyle: "normal",
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 20,
    /* identical to box height */
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    letterSpacing: 0.2,
    color: "#000000",
    zIndex: -1,
  },
});

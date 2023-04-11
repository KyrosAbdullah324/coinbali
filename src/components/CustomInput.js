import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export default ({
  label,
  placeholder,
  onChange,
  defvalue,
  height = 40,
  multi = false,
  lineCount = 4,
  value = "",
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={{
          ...styles.input,
          height: Math.min(multi ? 140 : 40, height),
          textAlignVertical: multi ? "top" : "center",
        }}
        defaultValue={defvalue}
        placeholder={placeholder}
        multiline={multi}
        numberOfLines={multi ? lineCount : 1}
        onChange={(e) => onChange(e.target.value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontFamily: 'Montserrat-Medium',
    borderWidth: 1,
    borderColor: "#627BBB",
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 8,
    width: "100%",
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    height: 40,
  },
});

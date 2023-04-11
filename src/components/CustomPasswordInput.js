import React, {useState} from "react";
import {Text, TextInput, StyleSheet, View} from 'react-native'

const AsteriskPasswordInput = (props) => {
  const [value, setValue] = useState(props.defvalue);
  const [maskedValue, setMaskedValue] = useState('*********');

  const handleInputChange = (text) => {
    setValue(text);
    setMaskedValue(text.replace(/./g, '*'));

    // Pass the unmasked value to the parent component if required
    if (props.onChangeText) {
      props.onChangeText(text);
    }
  };

  return (
    <View style={styles.inputContainer}>
    <Text style={styles.label}>{props.label}</Text>
    {/* <TextInput
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
    /> */}
    <TextInput
      style={styles.input}
      defaultValue={props.defvalue}
      placeholder={props.placeholder}
      value={maskedValue}
      onChangeText={handleInputChange}
      secureTextEntry={false}
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

export default AsteriskPasswordInput;
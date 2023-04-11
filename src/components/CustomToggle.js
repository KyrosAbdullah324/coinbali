import React, {useState} from 'react';
import { View, TouchableOpacity, StyleSheet} from 'react-native';

export default () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };
    const backgroundColor = isToggled ? '#767577' : '#627BBB';
    const side = isToggled ? {left: 2.5} : {right: 2.5};
    const buttonStyle = {
        ...styles.togglebtn,
        backgroundColor,
    };
    const thumbStyle = {
        ...styles.thumbbtn,
        ...side
    };

  return (
    <View>   
      <TouchableOpacity onPress={handleToggle} style={buttonStyle} activeOpacity={1}>
        <View style={thumbStyle} />
        </TouchableOpacity>    
    </View>
  );
}

const styles = StyleSheet.create({
  togglebtn: {
    borderRadius: 16,
    width: 40,
    height: 20,

    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  thumbbtn: {
    position: "absolute",

    top: 2.5,
    width: 15,
    height: 15,
    borderRadius: 13,
    backgroundColor: "#ffffff",
  },
});


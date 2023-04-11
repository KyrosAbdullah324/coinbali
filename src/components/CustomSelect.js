import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import DownArrow from '../../assets/images/downarrow.png';
import Note_Icon from '../../assets/images/note.png';

const CustomSelect = ({
  label,
  placeholder,
  optionList,
  handleSelect,
  selectedOption,
  icon=null
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionPress = (option) => {
    handleSelect(option);
    setShowOptions(false);
  };

  return (
    <View style={styles.customSelectContainer}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={styles.select}
        onPress={() => setShowOptions(!showOptions)}
      >
        <Text style={styles.selectText}>
          {selectedOption ? selectedOption : placeholder}
        </Text>
        <Image source={icon?Note_Icon:DownArrow}/>
      </TouchableOpacity>
      {showOptions && (
          <View style={[styles.optionListContainer, {borderRadius: 8}]}>
            {optionList.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionItem}
                onPress={() => handleOptionPress(option.label)}
              >
                <View style={{flexDirection: "row"}}>
                {
                    option.thumbnail &&
                    <Image source={option.thumbnail} style={styles.cryptoImg} />
                }
                <Text style={styles.optionText}>{option.label}</Text>
                </View>

              </TouchableOpacity>
            ))}
          </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  customSelectContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 8,
  },
  cryptoImg: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  select: {
    borderWidth: 1,
    borderColor: '#627BBB',
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 8,
    width: '100%',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
    height: 42,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"
  },
  selectText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  optionListContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 4 ,
    maxHeight: 150, // Adjust this value to change the maximum height of the option list
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5, // Add this 
  },
  optionItem: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  optionText: {
    fontSize: 16,
  },
});

export default CustomSelect;

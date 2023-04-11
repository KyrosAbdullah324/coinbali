import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  Switch,
} from "react-native";
import SettingTitle from "../../components/settings/SettingTitle";
import SearchIcon from "../../../assets/images/search.png";
import SmallShareIcon from "../../../assets/images/smallShare.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Checkbox } from "react-native-paper";

export default () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SettingTitle
        title={"Share portfolio"}
        goWithNavigate={() => navigation.goBack()}
        backnavigate={true}
      />
      <View style={styles.leftright}>
        <View style={styles.searchinputContainer}>
          <Image source={SearchIcon} style={styles.searchicon} />
          <TextInput style={styles.searchinput} placeholder="Search" />
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("ShowPortfolio")}
        >
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{marginRight: 4, flexDirection:'row', justifyContent:'center', alignItems:'center', width: 16, height: 16}}>
              <Image source={SmallShareIcon}/>
            </View>
            <Text style={styles.addButtonText}>Share</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        width={"100%"}
        data={data}
        renderItem={({ item }) => (
          <ListItem key={item} item={item} onCheckboxPress={handleCheckboxPress} />
        )}
        showsVerticalScrollIndicator={false} // Set this to false
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const ListItem = ({ item, onCheckboxPress }) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.listitems}>
      <View style={styles.leftitems}>
        <Image source={item.image} style={styles.avatar} />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.fullName}>{item.name}</Text>
          <Text style={styles.at}>{item.symbol}</Text>
        </View>
      </View>
      <View style={{ marginRight: -8, paddingRight: 0 }}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
            // onCheckboxPress(item);
          }}
          checkedColor="#627BBB"
          uncheckedColor="#627BBB"
          style={{
            paddingLeft: 32,
          }}
          animation={false}
        />
      </View>
    </View>
  );
};

const data = [
  {
    id: "1",
    name: "Lukas Faust",
    symbol: "@lukasfaust",
    image: require("../../../assets/images/Avatar5.png"), // Replace with the actual path to the image
  },
  {
    id: "2",
    name: "James Peterson",
    symbol: "@jamespererson",
    image: require("../../../assets/images/Avatar2.png"), // Replace with the actual path to the image
  },
  {
    id: "3",
    name: "Alisha Collier",
    symbol: "@alishacollier",
    image: require("../../../assets/images/Avatar5.png"), // Replace with the actual path to the image
  },
  {
    id: "4",
    name: "George Bocanegra",
    symbol: "@gebocanegra",
    image: require("../../../assets/images/Avatar4.png"), // Replace with the actual path to the image
  },
  {
    id: "5",
    name: "Leroy Long",
    symbol: "@leroylong",
    image: require("../../../assets/images/Avatar3.png"), // Replace with the actual path to the image
  },
  {
    id: "6",
    name: "Frank Miller",
    symbol: "@frankmiller",
    image: require("../../../assets/images/Avatar5.png"), // Replace with the actual path to the image
  },
  {
    id: "7",
    name: "Ethan Nagata",
    symbol: "@ethanagata",
    image: require("../../../assets/images/Avatar2.png"), // Replace with the actual path to the image
  },
  {
    id: "8",
    name: "Michael Hines",
    symbol: "@michaelhines",
    image: require("../../../assets/images/Avatar4.png"), // Replace with the actual path to the image
  },
  {
    id: "9",
    name: "Lukas Faust",
    symbol: "@lukasfaust",
    image: require("../../../assets/images/Avatar5.png"), // Replace with the actual path to the image
  },
  {
    id: "10",
    name: "Leroy Long",
    symbol: "@leroylong",
    image: require("../../../assets/images/Avatar3.png"), // Replace with the actual path to the image
  },
  {
    id: "11",
    name: "SHIBA INU",
    symbol: "SHIB",
    image: require("../../../assets/images/Avatar5.png"), // Replace with the actual path to the image
  },
  {
    id: "12",
    name: "Chainlink",
    symbol: "LINK",
    image: require("../../../assets/images/Avatar2.png"), // Replace with the actual path to the image
  },
  // Add more items here
];

const handleCheckboxPress = (item) => {
  setSelectedItems((prev) => {
    if (prev.includes(item)) {
      return prev.filter((i) => i.id !== item.id);
    } else {
      return [...prev, item];
    }
  });
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
  leftright: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 30
  },
  listitems: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    height: 68,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  searchinputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 32,
    borderWidth: 2,
    borderColor: "rgba(98, 123, 187, 0.4)",
    borderRadius: 8,
  },
  searchicon: {
    width: 13,
    height: 13,
    marginLeft: 13,
    marginRight: 13,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  searchinput: {
    width: "70%",
    fontSize: 12,
    letterSpacing: 0.2,
    height: 32,
  },

  addButton: {
    backgroundColor: "#627BBB",
    borderRadius: 5,
    marginLeft: 13,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    height: 26,
  },
  addButtonText: {
    color: "white",
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.2,
    // fontFamily: 'Outfit'
  },
  leftitems: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  fullName: {
    fontSize: 13,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: 0.2,
    lineHeight: 16,
    height: 16,
  },
  at: {
    color: "rgba(0, 0, 0, 0.8)",
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 16,
    letterSpacing: 0.2,
    height: 16,
  },
});

import React, {useState, useRef} from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import LeftPassiveIcon from "../../assets/images/left_passive.png";
import RightActiveIcon from "../../assets/images/right_active.png";

const data = [
  { id: "1", text: "All" },
  { id: "2", text: "Team pics" },
  { id: "3", text: "Spend over $100" },
  { id: "4", text: "Trending" },
  { id: "5", text: "Category per coin" },
  { id: "6", text: "Upcoming ideas" },
  { id: "7", text: "Nearly funded" },
  { id: "8", text: "Backed by people you follow" },
  { id: "9", text: "Just launched" },
  { id: "10", text: "Watchlist" },
];

const App = () => {
  const flatListRef = useRef();
  const scroll = (offset)=>{
    flatListRef.current.scrollToOffset({animated: true, offset});
  };

  const handleLeftPress = () =>{
    flatListRef.current?.scrollToOffset({
      offset: curOffset - 100,
      animated: true,
    });
  };
  const handleRightPress = () => {
    flatListRef.current?.scrollToOffset({
      offset: curOffset + 100,
      animated: true,
    });
  }
  const [curTab, setCurTab] = useState(1);
  const [curOffset, setCurOffset] = useState(0);
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.itemContainer,
          ...(curTab == item.id && styles.itemContainerSelected),
        }}
        onPress={() => {
          setCurTab(item.id);
        }}
      >
        <Text
          style={{
            ...styles.itemText,
            ...(curTab == item.id && styles.itemTextSelected),
          }}
        >
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.carouselContainer}>
        <TouchableOpacity
          style={{
            width: 24,
            height: 24,
            justifyContent: "center",
            alignItems: "center",
            transform: [{ rotate: "180deg" }],
          }}
          onPress={handleLeftPress}
        >
          <Image source={RightActiveIcon} />
        </TouchableOpacity>
        <FlatList
          ref={flatListRef}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carousel}
          fadingEdgeLength={100}
          onScroll={(event)=>setCurOffset(event.nativeEvent.contentOffset.x)}
        />
        <TouchableOpacity
          style={{
            width: 24,
            height: 24,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={handleRightPress}
        >
          <Image source={RightActiveIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  carouselContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: "center",
  },
  carousel: {
    alignItems: "center",
    columnGap: 8,
  },
  itemContainer: {
    backgroundColor: "rgba(210, 217, 235, 1)",
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
  itemContainerSelected: {
    backgroundColor: "#627BBB",
  },
  itemText: {
    fontSize: 11,
    fontFamily: "Montserrat-Medium",
    lineHeight: 13,
    color: "#000000",
  },
  itemTextSelected: {
    fontFamily: "Montserrat-SemiBold",
    color: "#ffffff",
  },
});

export default App;

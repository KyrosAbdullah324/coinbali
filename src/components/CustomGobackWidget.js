///       //
///      <<===  .....GoBackSection.....
///       \\
import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import Left_Img from "../../assets/images/Left.png";
import { useNavigation } from '@react-navigation/native';

export default ({ Title = "" }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.topbar}>
            <Text style={styles.title}>
                {Title}
            </Text>
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                <Image source={Left_Img} style={styles.leftImg} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    topbar: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        width: '100%'
      },
      title: {
        fontSize: 16,
        lineHeight: 16,
        fontFamily: 'Montserrat-SemiBold'
      },
      backBtn: {
        position: 'absolute',
        top: '50%',
        transform: [{ translateY: -13 }],
        left: 0
      },
      leftImg: {
        width: 24,
        height: 24
      }
})
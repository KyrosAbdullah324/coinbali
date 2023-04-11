import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";

import { View, StyleSheet, Text,Dimensions, FlatList, Image, Modal, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import SettingTitle from "../../../components/settings/SettingTitle";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LineChart } from "react-native-chart-kit";

import ArrowUp from '../../../../assets/images/arrow-up.png'
import ArrowDown from '../../../../assets/images/arrow-down.png'
import Edit_Img from '../../../../assets/images/edit1.png'
import Del_Img from '../../../../assets/images/delete.png'
import Star from '../../../../assets/images/empty.png'

import CustomButton from '../../../components/CustomButton';

const { width, height } = Dimensions.get('window');

const ActionToolTip = ({ actions, handleToggle }) => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState([0, 0]);
    const handle = (e) => {
        let offestX = 0, offestY = 0;
        if (width / 2 < e.nativeEvent.pageX)
            offestX = 210
        else
            offestX = 0
        if (height / 2 < e.nativeEvent.pageY)
            offestY = 70 + actions.length * 30
        else
            offestY = 50
        setPosition([e.nativeEvent.pageX - offestX, e.nativeEvent.pageY - offestY])
        setVisible(visible => !visible);
    }
    React.useEffect(() => {
        handleToggle.current = handle;
    }, [])
    const close = () => {
        setVisible(visible => !visible);
    }
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={handle}
            dropdownStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
            <TouchableWithoutFeedback onPress={() => { close() }}>
                <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 0 }} />
            </TouchableWithoutFeedback>
            <View style={[
                styleActionTooltip.widget,
                {
                    top: position[1],
                    left: position[0],
                }]
            }>
                {(actions.lengh !== 0) ? actions.map(({ name, image, func = () => { } }, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                close();
                                func();
                            }}
                            style={
                                [styleActionTooltip.item,
                                ((actions.length - 1) == index) && styleActionTooltip.borderLess]
                            }>
                            <Image source={image} style={styleActionTooltip.image} />
                            <Text style={{fontFamily: 'Montserrat-Medium'}}>{name}</Text>
                        </TouchableOpacity>
                    )
                }) :
                    (
                        <></>
                    )}
            </View>
        </Modal>
    )
}

export default ({route}) => {
    const navigation = useNavigation();
    const ActionRef = useRef(null);
    const flag = ((route.params??false)==false?false:route.params.flag);
    const data = flag == false ? [] : 
    [
        {
            id: '1',
            name: 'Bitcoin',
            symbol: 'BTC',
            currentBudget: '12,456',
            change: '+4.82',
            image: require('../../../../assets/images/bitcoin.png'), // Replace with the actual path to the image
        },
        {
            id: '2',
            name: 'Ethereum',
            symbol: 'ETH',
            currentBudget: '9,456',
            change: '-0.17',
            image: require('../../../../assets/images/eth.png'), // Replace with the actual path to the image
        },
        {
            id: '3',
            name: 'Solana',
            symbol: 'SOL',
            currentBudget: '456',
            change: '+0.94',
            image: require('../../../../assets/images/sol.png'), // Replace with the actual path to the image
        },
        {
            id: '4',
            name: 'BNB',
            symbol: 'BNB',
            currentBudget: '298.96',
            change: '+1.78',
            image: require('../../../../assets/images/bnb.png'), // Replace with the actual path to the image
        },
        {
            id: '5',
            name: 'XRP',
            symbol: 'XRP',
            currentBudget: '0.4117',
            change: '+5.82',
            image: require('../../../../assets/images/xrp.png'), // Replace with the actual path to the image
        },
        {
            id: '6',
            name: 'Cardano',
            symbol: 'ADA',
            currentBudget: '0.318',
            change: '-0.48',
            image: require('../../../../assets/images/ada.png'), // Replace with the actual path to the image
        },
        {
            id: '7',
            name: 'Dogecoin',
            symbol: 'DOGE',
            currentBudget: '0.07496',
            change: '+0.74',
            image: require('../../../../assets/images/doge.png'), // Replace with the actual path to the image
        },

        {
            id: '8',
            name: 'Polygon',
            symbol: 'MATIC',
            currentBudget: '0.8141',
            change: '-0.54',
            image: require('../../../../assets/images/matic.png'), // Replace with the actual path to the image
        },
        {
            id: '9',
            name: 'Bitcoin Cash',
            symbol: 'BCH',
            currentBudget: '$12,456',
            change: '+4.82',
            image: require('../../../../assets/images/bch.png'), // Replace with the actual path to the image
        },
        {
            id: '10',
            name: 'Tether',
            symbol: 'USDT',
            currentBudget: '$12,456',
            change: '+4.82',
            image: require('../../../../assets/images/usdt.png'), // Replace with the actual path to the image
        },
        // Add more items here
    ];
    const actions = [
        {
            name: "Edit",
            image: Edit_Img,
            func: () => { navigation.navigate('EditWatchlist') }
        },
        {
            name: "Delete Watchlist",
            image: Del_Img
        }
    ]
    const ListItem = ({ item }) => {
        return (
            <View style={styles.listitems}>
                <View style={styles.leftitems}>
                    <Image source={item.image} style={styles.bitcoin} />
                    <Text style={styles.coinname}>{item.name}</Text>
                    <Text style={styles.bracket}>{item.symbol}</Text>
                </View>
                <View style={{ width: 90 }}>
                    <LineChart
                        data={{
                            datasets: [
                                {
                                    data: [10, 30, 24, 33, 26, 29, 22, 25, 22, 22],
                                    color: () => item.change < 0 ? `#E24040` : `#179d25`,
                                },
                            ],
                        }}
                        width={150}
                        height={30}
                        chartConfig={{
                            backgroundGradientFrom: "white",
                            backgroundGradientTo: "white",
                            fillShadowGradient: "#c1e5c4", // Change this to the desired gradient color
                            fillShadowGradientOpacity: -0.2,
                            strokeWidth: 1.5,
                            color: () => item.change < 0 ? `red` : `yellow`,
                        }}
                        withHorizontalLabels={false}
                        withVerticalLabels={false}
                        withDots={false}
                        withInnerLines={false}
                        withOuterLines={false}
                        useShadowColorFromDataset={false}
                        style={{ position: 'absolute', left: -50 }}
                    />
                </View>
                <View style={{ width: 90, alignItems: 'flex-end' }}>
                    <Text style={styles.currentBudget}>${item.currentBudget}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={item.change < 0 ? ArrowDown : ArrowUp} style={{ width: 10, height: 10, marginRight: 4 }} />
                        <Text style={[styles.change, { color: (item.change < 0 ? '#E24040' : '#179D25') }]}>{item.change}%</Text>
                    </View>
                </View>
            </View>
        );
    };




    return (
        <View style={styles.container}>
            <ActionToolTip actions={actions} handleToggle={ActionRef} />
            <View style={{ flex: 1 }}>
                {/* create title */}
                <View style={styles.title} >
                    <SettingTitle title="My Watchlist" goWithNavigate={() => navigation.goBack()} backnavigate={true} />
                    {data.length !== 0 && <Icon style={styles.iconstyle} name="dots-horizontal" size={24} color="black" onPress={(e) => { ActionRef.current(e) }} />}
                </View>
                {
                    data.length == 0 ?
                        <View style={styles.content}>
                            <View style={styles.createIcon}>
                                <Image source={Star}></Image>
                            </View>
                            <Text style={styles.success}>Your watchlist is empty</Text>
                            <Text style={styles.successText}>
                                Press the button below to add coins to your Watchlist.
                            </Text>
                        </View>
                        :
                        <View>
                            <View style={styles.followers}>
                                <Text style={styles.followerstext}>25 Followers</Text>
                                <View></View>
                            </View>
                            {/* listitems with line charts */}
                            <FlatList
                                width={'100%'}
                                data={data}
                                renderItem={({ item }) => (
                                    <ListItem item={item} />
                                )}
                                showsVerticalScrollIndicator={false} // Set this to false
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                }


            </View>
            <CustomButton label='Add coins' to='SelectAddCoin'/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 44,
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 20,
        fontFamily: 'Montserrat-Regular',
        // fontFamily: 'Montserrat'
    },
    title: {
        position: 'relative',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    iconstyle: {
        position: 'absolute',
        right: 0,
        top: 12,
    },
    followers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 15
    },
    followerstext: {
        flex: 1,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },
    listitems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.2)'
    },
    searchinputContainer: {
        width: '65%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 32,
        borderWidth: 2,
        borderColor: 'rgba(98, 123, 187, 0.4)',
        borderRadius: 8,
        marginLeft: 10
    },
    searchicon: {
        width: 13,
        height: 13,
        marginLeft: 13,
        marginRight: 13
    },
    bitcoin: {
        width: 24,
        height: 24,
    },
    searchinput: {
        width: '70%',
        fontSize: 12,
        letterSpacing: 0.2,
        height: 32,
    },

    addButton: {
        backgroundColor: "#627BBB",
        borderRadius: 5,
        width: 90,
        alignItems: "center",
        justifyContent: "center",
        height: 26,
        marginRight: 5
    },
    addButtonText: {
        color: "white",
        fontSize: 11,
        fontFamily: 'Montserrat-SemiBold',
    },
    leftitems: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 147,
        zIndex: 1
    },
    coinname: {
        paddingLeft: 16,
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold'
    },
    currentBudget: {
        paddingLeft: 16,
        fontSize: 12,
        fontFamily: 'Montserrat-Medium'
    },
    bracket: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 12,
        marginLeft: 5,
        fontFamily: 'Montserrat-SemiBold'
    },
    change: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 12,
        marginLeft: 5,
        fontFamily: 'Montserrat-Medium'
    },
    content: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        marginTop: 100
    },
    createIcon: {
        width: 99,
        height: 99,
        backgroundColor: "#F2F3FA",
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },ess: {
        height: 20,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        lineHeight: 20,
        /* identical to box height */
        letterSpacing: 0.2,
        color: "#000000",
        marginTop: 71,
    },
    success: {
        height: 20,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        lineHeight: 20,
        /* identical to box height */
        letterSpacing: 0.2,
        color: "#000000",
        marginTop: 39,
      },
    successText: {
        height: 34,
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        lineHeight: 17,
        /* identical to box height */
        letterSpacing: 0.2,
        color: "rgba(0, 0, 0, 0.6)",
        marginTop: 15,
        textAlign: "center",
        paddingHorizontal: 30,
    },
})
const styleActionTooltip = StyleSheet.create({
    widget: {
      paddingVertical: 4,
      paddingHorizontal: 10,
      width: 210,
      position: 'absolute',
      elevation: 5,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'flex-start',
      borderRadius: 5
    },
    item: {
      borderBottomWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.2)',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingVertical: 6
    },
    image: {
      height: 24,
      width: 24,
      marginRight: 10,
    },
    borderLess: {
      borderBottomWidth: 0
    }
  })
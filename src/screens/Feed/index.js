import React, { useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Feed from "./Feed";
import Notifications from "./Notifications";
import Following from "./Following";
import WatchList from "./watchlist";
import CreateWatchList from "./watchlist/CreateWatchList";
import EditWatchlistScreen from './watchlist/EditWatchlist';
import WatchListScreen from "../Feed/watchlist";
import SelectAddingCoin from "./watchlist/SelectAddingCoin";
import AddedCoin from "./watchlist/AddedCoin";
import TopCoin from "./watchlist/TopCoin";
const Stack = createStackNavigator();

export default () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="FeedList" component={Feed} options={{ headerShown: false }} />
            <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Following" component={Following} options={{ headerShown: false }} /> */}
            <Stack.Screen name="WatchList" component={WatchList} options={{ headerShown: false }} />
            <Stack.Screen name="NewWatchList" component={CreateWatchList} options={{ headerShown: false }} />
            {/* <Stack.Screen name="SelectAddCoin" component={SelectAddingCoin} options={{ headerShown: false }} /> */}
            <Stack.Screen name="SelectCoinAdded" component={AddedCoin} options={{ headerShown: false }} />
            <Stack.Screen name="CoinManage" component={TopCoin} options={{ headerShown: false }} />
            <Stack.Screen name="EditWatchlist" component={EditWatchlistScreen} options={{ headerShown: false }} />
            <Stack.Screen name="WatchListScreen" component={WatchListScreen} options={{ headerShown: false }} />
           
      </Stack.Navigator>
    )
}
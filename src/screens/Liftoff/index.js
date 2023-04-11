import BasicLiftoff from "./BasicLiftoff";
import CreateNewLiftoff from "./CreateNewLiftoff";
import ContentLiftoff from "./ContentLiftoff";
import TeamLiftoff from "./TeamLiftoff";
import FundingLiftoff from "./FundingLiftoff";
import ListLiftoff from "./ListLiftoff";
import React, { useState } from 'react';
import DetailsLiftoff from "./DetailsLiftoff";
import InvestUSD from "./InvestUSD";
import ConfirmOrder from "./ConfirmOrder";
import Verification from "./Verification";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ListLiftoff" component={ListLiftoff} options={{ headerShown: false }} />
            <Stack.Screen name="CreateNewLiftoff" component={CreateNewLiftoff} options={{ headerShown: false }} />
            <Stack.Screen name="BasicLiftoff" component={BasicLiftoff} options={{ headerShown: false }} />
            <Stack.Screen name="ContentLiftoff" component={ContentLiftoff} options={{ headerShown: false }} />
            <Stack.Screen name="TeamLiftoff" component={TeamLiftoff} options={{ headerShown: false }} />
            <Stack.Screen name="FundingLiftoff" component={FundingLiftoff} options={{ headerShown: false }} />
            
            <Stack.Screen name="ListLiftoff1" component={ListLiftoff} options={{ headerShown: false }} />
            <Stack.Screen name="ListLiftoff2" component={ListLiftoff} options={{ headerShown: false }} />
            <Stack.Screen name="DetailLiftoff" component={DetailsLiftoff} options={{ headerShown: false }} />
            <Stack.Screen
                name="InvestUSD"
                component={InvestUSD}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ConfirmOrder"
                component={ConfirmOrder}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Verification"
                component={Verification}
                options={{ headerShown: false }}
            />
      </Stack.Navigator>
    )
}
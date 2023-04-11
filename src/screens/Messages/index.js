import React, { useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Messages from "./Messages";
const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MessageList" component={Messages} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
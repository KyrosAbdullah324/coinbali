import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Image } from "react-native";

import Liftoff from "./screens/Liftoff";
import ProfileScreen from "./screens/profile/ProfileScreen";
import SettingsScreen from "./screens/settings";
import MyProfileScreen from "./screens/profile/MyProfileScreen";
import SettingsProfileScreen from "./screens/settings/SettingsProfileScreen";

import SettingsNotificationScreen from "./screens/settings/SettingsNotificationScreen";
import SettingsKycScreen from "./screens/settings/SettingsKycScreen";
import AddEducationScreen from "./screens/profile/AddEducationScreen";

import LoginScreen from "./screens/auth/LoginScreen";
import ForgotPasswordScreen from "./screens/auth/ForgotPasswordScreen";
import CheckEmailScreen from "./screens/auth/CheckEmailScreen";
import ResetPasswordScreen from "./screens/auth/ResetPasswordScreen";
import SignUpScreen from "./screens/auth/SignUpScreen";
import VerifyEmail from "./screens/auth/VerifyEmail";

import Feed from "./screens/Feed";
import Likes from "./screens/Feed/Likes";
import Comments from "./screens/Feed/Comments";
// import Notifications from './screens/Notifications'
// import Following from './screens/Following'
import Messages from "./screens/Messages";
import SendMessage from "./screens/Messages/SendMessage";

import Feed_Img from "../assets/images/Feed.png";
import Liftoff_Img from "../assets/images/Liftoff.png";
import Portfolio_Img from "../assets/images/Portfolio.png";
import Messages_Img from "../assets/images/Messages.png";
import Profile_Img from "../assets/images/Profile.png";
import AddWorkScreen from "./screens/profile/AddWorkScreen";
import AddSkillsScreen from "./screens/profile/AddSkillsScreen";

import InvestNotice from "./screens/Feed/InvestNotice";
import BasicInfo from "./screens/settings/kyc-verification-course/BasicInfo";
import IDVerification from "./screens/settings/kyc-verification-course/IDVerification";
import SelectAddingCoin from "./screens/Feed/watchlist/SelectAddingCoin";
import AddedCoin from "./screens/Feed/watchlist/AddedCoin";
import TopCoin from "./screens/Feed/watchlist/TopCoin";

import PortfolioScreen from "./screens/portfolio";
import SharePortfolioScreen from "./screens/portfolio/SharePortfolioScreen";
import ShowPortfolioScreen from "./screens/portfolio/PortfolioScreen";
import SelectCoinScreen from "./screens/portfolio/SelectCoinScreen";
import AddTransactionScreen from "./screens/portfolio/AddTransactionScreen";
import Following from "./screens/Feed/Following";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={Feed_Img} style={styles.tabImg} />
          ),
          tabBarLabelStyle: { marginBottom: 4 }
        }}
      />
      <Tab.Screen
        name="Liftoff"
        component={Liftoff}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={Liftoff_Img} style={styles.tabImg} />
          ),
          tabBarLabelStyle: { marginBottom: 4 }
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={Portfolio_Img} style={styles.tabImg} />
          ),
          tabBarLabelStyle: { marginBottom: 4 }
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={Messages_Img} style={styles.tabImg} />
          ),
          tabBarLabelStyle: { marginBottom: 4 }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MyProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={Profile_Img} style={styles.tabImg} />
          ),
          tabBarLabelStyle: { marginBottom: 4 }
        }}
      />
      {/* <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={Profile_Img} style={styles.tabImg} />
          ),
        }}
      /> */}
      {/* <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={Profile_Img} style={styles.tabImg} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forgot"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CheckEmail"
          component={CheckEmailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifyEmail"
          component={VerifyEmail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Comments"
          component={Comments}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Likes"
          component={Likes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings/Profile"
          component={SettingsProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings/Notifications"
          component={SettingsNotificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings/Kyc"
          component={SettingsKycScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings/Kyc/BasicInfo"
          component={BasicInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings/Kyc/IDVerification"
          component={IDVerification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddEducation"
          component={AddEducationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddWork"
          component={AddWorkScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddSkills"
          component={AddSkillsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InvestNotice"
          component={InvestNotice}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SelectAddCoin" component={SelectAddingCoin} options={{ headerShown: false }} />
      
        {/* <Stack.Screen name="SelectCoinAdded" component={AddedCoin} options={{ headerShown: false }} /> */}
        <Stack.Screen
          name="SendMessage"
          component={SendMessage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SharePortfolio"
          component={SharePortfolioScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ShowPortfolio"
          component={ShowPortfolioScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectCoin"
          component={SelectCoinScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddTransaction"
          component={AddTransactionScreen}
          options={{ headerShown: false }}
        />
      
        <Stack.Screen name="Following" component={Following} options={{ headerShown: false }} />

        {/* <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Following" component={Following} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabImg: {
    width: 24,
    height: 24,
  },
});

export default AppNavigator;

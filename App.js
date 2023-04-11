import {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import store from './src/redux/store';
import AppNavigator from './src/AppNavigator';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  async function loadFonts() {
    await Font.loadAsync({
      'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),//100
      'Montserrat-ExtraLight': require('./assets/fonts/Montserrat-ExtraLight.ttf'),//200
      'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),//300
      'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),//400
      'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),//500
      'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),//600
      'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),//700
      'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),//800
      'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),//900
    });
    setFontLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  if(!fontLoaded)
    return null;

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigator />
        <StatusBar style='auto' hidden={true}/>
      </View>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native';
import { COLORS } from './themes/colors';
import RootNavigator from './navigation';
import { Provider } from 'react-redux';
import { store } from './store';
import { init } from './db';
import {useFonts} from 'expo-font'
init()
  .then(() => {
    console.log('Initialized database');
  })
  .catch((err) => {
    console.log('Initializing db failed');
    console.log(err);
  });
export default function App() {
  const [loaded, error] = useFonts({
    'Heebo-Regular': require('../assets/fonts/Heebo-Regular.ttf'),
    'Heebo-Semibold': require('../assets/fonts/Heebo-SemiBold.ttf')
  })

  if (!loaded) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color={COLORS.primary} size="large" />
      </View>
    );
  }
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
      <RootNavigator/>
      <StatusBar style="auto" />
      </SafeAreaView>
      </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

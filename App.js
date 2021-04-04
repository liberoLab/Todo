import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import Header from './components/Header'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


/* 최신 expo는 <StatusBar style="auto" /> 가 생겼다.
그래서 아래 같이 작성하면 위와 같은 효과를 얻을 수 있다.

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import Header from './components/Header'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    backgroundColor: '#fff',
  },
});
*/
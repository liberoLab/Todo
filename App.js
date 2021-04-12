import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import TaskModal from './components/TaskModal'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TodoItem title="강의 한개 듣기" done={true} />
      <TodoItem title="1일 1커밋 하기" done={false} />
      <TaskModal isVisible={false} />
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
import TodoItem from './components/TodoItem'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TodoItem title="강의 한개 듣기" done={true}/>
      <TodoItem title="1일 1커밋 하기" done={false}/>
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
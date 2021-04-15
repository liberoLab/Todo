import React from 'react';
import { StyleSheet, FlatList, SafeAreaView, } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import TaskModal from './components/TaskModal'

export default class App extends React.Component {
  state = {
    todos: [{
      title: '1일 1강',
      done: true,
    }, {
      title: '공부하기',
      done: false,
    }],
    showModal: false,
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          show={() => {
            this.setState({ showModal: true })
          }}
        />
        <FlatList
          data={this.state.todos}
          renderItem={({ item, index }) => {
            return (
              <TodoItem
                title={item.title}
                done={item.done}
                remove={() => {
                  this.setState({
                    todos: this.state.todos.filter((_, i) => i !== index)
                  })
                }}
              />
            )
          }}
          keyExtractor={(_, index) => {
            return `${index}`
          }}
        />

        <TaskModal isVisible={this.state.showModal}
          add={(title) => {
            this.setState({
              todos: this.state.todos.concat({
                title: title,
                done: false,
              }),
              showModal: false,
            })
          }}
          hind={() => {
            this.setState({ showModal: false })
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

/* 저장소 이전까지 함수형으로 코딩중이엿음. 아래가 함수형. 위는 클래스형.
import React from 'react';
import { StyleSheet, FlatList, SafeAreaView, } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import TaskModal from './components/TaskModal'

export default function App() {
  state = {
    todos: [{
      title: '1일 1강',
      done: true,
    }, {
      title: '공부하기',
      done: false,
    }],
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={state.todos}
        renderItem={({ item }) => {
          return (
            <TodoItem
              title={item.title}
              done={item.done}
            />
          )
        }}
        keyExtractor={(_, index)=> {
          return `${index}`
        }}
      />

      <TaskModal isVisible={false} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
}); */


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
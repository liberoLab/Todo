import React from 'react';
import { StyleSheet, FlatList, SafeAreaView, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage' // 저장소를 불러오려면 얘도 입력 필요 (사용 하려면 npm install @react-native-async-storage/async-storage 설치 하기)
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
// componentwillMount 대신 componentDidMount 로 사용
  componentDidMount() {
    AsyncStorage.getItem('@todo:state').then((state) => {
      this.setState(JSON.parse(state))
    })
  }

  save = () => {
    AsyncStorage.setItem('@todo:state', JSON.stringify(this.state))
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
                  }, this.save)
                }}
                toggle={() => {
                  const newTodos = [...this.state.todos]
                  newTodos[index].done = !newTodos[index].done
                  this.setState({ todos: newTodos }, this.save)
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
            }, this.save)
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
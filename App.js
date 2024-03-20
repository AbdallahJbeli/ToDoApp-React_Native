import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Header from './components/header'; 
import TodoItem from './components/todoItem'; 
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AddTodo from './components/addToo';

export default function App(setText) {
  const [todos, setTodos] = useState([
    { text: 'buy a coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHundler = (text, setText) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos,
      ]
    });
    setText('')
  }


  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHundler={submitHundler}/>
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20
  },
});

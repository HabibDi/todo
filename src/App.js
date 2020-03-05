import React from 'react';
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";


import './App.css';

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Première tâche",
        completed: false
      },
      {
        id: 2,
        title: "Deuxième tâche",
        completed: false
      },
      {
        id: 3,
        title: "Troisième tâche",
        completed: false
      }
    ]
  }

  // Marque les tâches comme complétées
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  // Supprime les tâches
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  // Ajoute une tâche

  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <Header></Header>
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>

      </div>
    );
  }


}

export default App;

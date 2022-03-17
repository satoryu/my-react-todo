import TodoInputForm from "./TodoInputForm";
import TodoList from "./TodoList";
import React from 'react'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: this.props.todos
    }

    this.addNewTask = this.addNewTask.bind(this)
    this.completeTodo = this.completeTodo.bind(this)
  }

  addNewTask(task) {
    const todos = this.state.todos
    todos.push({ id: (new Date).getTime(), task, completed: false })

    this.setState({
      todos: todos
    })
  }

  completeTodo(id) {
    const todos = this.state.todos
    const completedTodo = todos.find((todo) => todo.id === id)

    completedTodo.completed = true
    this.setState({
      todos: todos
    })
  }

  render() {
    const todos = this.props.todos;

    return (
      <div className="App">
        <TodoInputForm onSubmit={this.addNewTask} />
        <TodoList todos={todos} onCompleted={this.completeTodo} />
      </div>
    );
  }
}

export default App;

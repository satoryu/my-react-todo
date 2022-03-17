import TodoInputForm from "./TodoInputForm";
import TodoList from "./TodoList";
import TodoFilterSelect from "./TodoFilterSelect";
import React from 'react'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: this.props.todos,
      filter: () => true
    }

    this.addNewTask = this.addNewTask.bind(this)
    this.completeTodo = this.completeTodo.bind(this)
  }

  addNewTask(task) {
    const todos = this.state.todos
    todos.push({ id: (new Date()).getTime(), task, completed: false })

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
    const filter = this.state.filter
    const filteredTodos = todos.filter(filter)
    const onSelected = (f) => { this.setState({filter: f.filter}) }

    return (
      <div className="App">
        <TodoInputForm onSubmit={this.addNewTask} />
        <TodoFilterSelect onSelected={onSelected} />
        <TodoList todos={filteredTodos} onCompleted={this.completeTodo} />
      </div>
    );
  }
}

export default App;

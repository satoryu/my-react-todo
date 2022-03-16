import TodoInputForm from "./TodoInputForm";
import TodoList from "./TodoList";
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: this.props.todos
    }

    this.addNewTask = this.addNewTask.bind(this)
  }

  addNewTask(task) {
    const todos = this.state.todos
    todos.push({ task, completed: false })

    this.setState({
      todos: todos
    })
  }

  render() {
    const todos = this.props.todos;

    return (
      <div className="App">
        <TodoInputForm onSubmit={this.addNewTask} />
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default App;

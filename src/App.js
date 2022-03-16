import TodoInputForm from "./TodoInputForm";
import TodoList from "./TodoList";

function App(props) {
  const todos = props.todos;

  return (
    <div className="App">
      <TodoInputForm />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

export default function TodoItem(props) {
  const todo = props.todo

  return (
    <li>{todo.task}</li>
  )
}
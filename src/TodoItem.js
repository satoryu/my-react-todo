export default function TodoItem(props) {
  const todo = props.todo
  const onCompleted = (event) => { props.onCompleted(todo.id) }

  return (
    <li className={ todo.completed ? 'completed' : ''}>
      {todo.task}

      <button onClick={onCompleted} disabled={todo.completed}> Complete </button>
    </li>
  )
}
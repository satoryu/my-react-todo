import TodoItem from './TodoItem'

export default function TodoList(props) {
  const onCompleted = (id) => {
    console.debug(`todo#{id} is completed`)
    props.onCompleted(id)
  }

  const items = props.todos.map((todo) => {
    return (<TodoItem key={todo.id} todo={todo} onCompleted={onCompleted} />)
  })

  return (
    <ul>
      {items}
    </ul>
  )
}
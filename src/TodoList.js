import TodoItem from './TodoItem'

export default function TodoList(props) {
  const items = props.todos.map((todo, i) => {
    return (<TodoItem key={i} todo={todo} />)
  })

  return (
    <ul>
      {items}
    </ul>
  )
}
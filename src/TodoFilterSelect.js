export default function TodoFilterSelect(props) {
  const filters = [
    { type: "all", filter: () => true },
    { type: "completed", filter: (todo) => todo.completed },
  ];
  const onChange = (event) => {
    const selectedFilter = filters.find((f) => f.type === event.target.value)
    props.onSelected(selectedFilter)
  }
  const radioButtons = filters.map((filter) => {
    return (
      <span>
        <input type="radio" name="todo-filter" value={filter.type} onChange={onChange} />
        <label for={filter.type}>{filter.type}</label>
      </span>
    );
  });

  return <div>{radioButtons}</div>;
}

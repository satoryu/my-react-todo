import { todoFilters } from "./TodoFilter";

export default function TodoFilterSelect(props) {
  const defaultFilter = props.defaultFilter || "all"
  const onChange = (event) => {
    const selectedFilter = todoFilters.find((f) => f.type === event.target.value)
    props.onSelected(selectedFilter.filter)
  }
  const radioButtons = todoFilters.map((filter) => {
    return (
      <span>
        <input type="radio" name="todo-filter" value={filter.type} onChange={onChange} defaultChecked={filter.type === defaultFilter} />
        <label for={filter.type}>{filter.type}</label>
      </span>
    );
  });

  return <div>{radioButtons}</div>;
}

const todoFilters = [
  { type: "all", filter: () => true },
  { type: "completed", filter: (todo) => todo.completed },
];

export { todoFilters }

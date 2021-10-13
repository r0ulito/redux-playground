export const toggleTodoProperty = (todoId, property) => ({
  type: "TOGGLE_TODO_PROPERTY",
  payload: {
    todoId,
    property,
  },
});

export const editTitle = (value, id) => ({
  type: "UPDATE_TODO",
  payload: {
    value,
    id,
  },
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  id,
});
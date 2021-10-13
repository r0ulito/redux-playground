import { createStore } from "redux";

const initialState = {
  todos: [],
  filteredTodos: [],
};

const handleStateChange = (arr) => {
  return {
    todos: arr,
    filteredTodos: arr,
  };
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const addTodos = [...state.todos, action.newTodo];
      return {
        todos: addTodos,
        filteredTodos: addTodos,
      };
    case "DELETE_TODO":
      return handleStateChange(
        state.todos.filter((todo) => todo.id !== action.id)
      );
    case "TOGGLE_TODO_PROPERTY":
      return handleStateChange(
        state.todos.map((todo) => {
          if (action.payload.todoId === todo.id) {
            return {
              ...todo,
              [action.payload.property]: !todo[action.payload.property],
            };
          }
          return todo;
        })
      );
    case "TODO_FILTER_ALL":
      return {
        todos: [...state.todos],
        filteredTodos: [...state.todos],
      };
    case "TODO_FILTER_COMPLETE":
      return {
        todos: [...state.todos],
        filteredTodos: state.todos.filter((todo) => todo.isCompleted),
      };
    case "TODO_FILTER_UNCOMPLETE":
      return {
        todos: [...state.todos],
        filteredTodos: state.todos.filter((todo) => !todo.isCompleted),
      };

    case "UPDATE_TODO":
      return handleStateChange(
        state.todos.map((todo) => {
          if (action.payload.id === todo.id) {
            return {
              ...todo,
              title: action.payload.value,
            };
          }
          return todo;
        })
      );
    case "DELETE_COMPLETED":
      return handleStateChange(state.todos.filter((todo) => !todo.isCompleted));
    default:
      return state;
  }
};

const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

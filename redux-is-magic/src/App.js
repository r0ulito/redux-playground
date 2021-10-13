import { TodoFilter, TodoInput, TodoList } from "./components";
import "./App.css";
import {  useState } from "react";
import { useDispatch } from "react-redux";

const todoModel = {
  id: 1,
  title: "",
  isCompleted: false,
  isEditing: false,
};

function App() {
  const [newTodo, setNewTodo] = useState(todoModel);
  const [todos, setTodos] = useState([]);

  const dispatch = useDispatch();

  const setTodoTitle = (title) => {
    setNewTodo((prevState) => ({
      ...prevState,
      title,
    }));
  };

  const handleChange = (title) => {
    setTodoTitle(title);
  };

  const handleKeyDown = (key) => {
    switch (key) {
      case "Enter":
        if (newTodo.title !== "") {
          dispatch({type: 'ADD_TODO', newTodo})
          setTodos((prevState) => [...prevState, newTodo]);
          Object.assign(todoModel, { id: ++todoModel.id });
          setNewTodo(todoModel);
        }
        break;
      case "Escape":
        // il faut faire un autre truc
        setTodoTitle("");
        break;
      default:
        break;
    }
  };


  return (
    <div className="App">
      <TodoInput
        title={newTodo.title}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
      />
      <TodoFilter />
      <TodoList />
    </div>
  );
}

export default App;

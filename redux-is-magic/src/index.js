import { createStore, combineReducers } from "redux";

let initialState = {
  greetings: "Not in the mood",
};

const GreetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "greetings/sayHello":
      return {
        ...state,
        greetings: "Hello world!",
      };
    case "greetings/sayGoodbye":
      return {
        ...state,
        greetings: "Goodbye!",
      };
    default:
      return state;
  }
};

let todoState = {
  todos: [
    {
      id: 1,
      title: "Pas de titre",
    },
    {
      id: 2,
      title: "J'ai un titre",
    },
  ],
};

const TodoReducer = (state = todoState, action) => {
  switch (action.type) {
    case "todo/delete":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id)
      }

    case "todo/add":
      return;

    default:
      return state;
  }
};

const megaReducer = combineReducers({
  todos: TodoReducer,
  greetings: GreetingsReducer,
});

let store = createStore(
  megaReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "" });
store.dispatch({ type: 'todo/delete', payload : { id : 2}})
store.dispatch({ type: "greetings/sayGoodbye" });
store.dispatch({ type: "greetings/sayHello" });
store.dispatch({ type: "greetings/sayGoodbye" });
store.dispatch({ type: "" });
store.dispatch({ type: "greetings/sayHello" });
store.dispatch({ type: "greetings/sayGoodbye" });

/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); */

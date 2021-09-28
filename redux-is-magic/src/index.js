import { createStore } from 'redux'

let initialState = {
  greetings: "Not In the moood!"
}
function greetingsReducer(state = initialState, action) {
  switch (action.type) {
    case 'greetings/sayHello':
      return { greetings: "Hello world!" }
    case 'greetings/sayGoodbye':
      return { greetings: "Goodbye!" }
    default:
      return state
  }
}

let store = createStore(greetingsReducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'greetings/sayHello' })
// {greetings: "Hello world!"}
store.dispatch({ type: 'greetings/sayHello' })
// {greetings: "Hello world!"}
store.dispatch({ type: 'greetings/sayGoodbye' })
// {greetings: "Goodbye!"}




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

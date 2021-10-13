import React from "react";
import { useDispatch } from "react-redux";

export function TodoInput({ title, handleChange, handleKeyDown }) {
  const dispatch = useDispatch();

  const addTodo = (title) => ({
    type: "ADD_TODO",
    title,
  });

  return (
    <input
      type="text"
      value={title}
      onChange={({ target: { value } }) => handleChange(value)}
      onKeyDown={({ key }) => handleKeyDown(key)}
    />
  );
}

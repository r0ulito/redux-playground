import React from "react";
import { TodoItem } from ".";
import { useDispatch, useSelector } from "react-redux";

export function TodoList(props) {
  const items = useSelector((state) => state.filteredTodos);
  const dispatch = useDispatch();

  return (
    <>
      {items.find((item) => item.isCompleted) && (
        <button onClick={() => dispatch({ type: "DELETE_COMPLETED" })}>
          Delete all completed
        </button>
      )}
      {items.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </>
  );
}

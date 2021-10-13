import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteTodo, editTitle, toggleTodoProperty } from "../redux/actionTodo";

export function TodoItem({
  todo: { id, title, isCompleted, isEditing }}) {
  const [oldTitle, setOldTitle] = useState(title);

  const dispatch = useDispatch();

  const handleInput = (key, id, oldTitle, value) => {
    switch (key) {
      case "Enter":
        dispatch(toggleTodoProperty(id, "isEditing"));
        setOldTitle(value);
        break;
      case "Escape":
        dispatch(toggleTodoProperty(id, "isEditing"));
        dispatch(editTitle(oldTitle, id));
        break;
      default:
        break;
    }
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => dispatch(toggleTodoProperty(id, "isCompleted"))}
      />{" "}
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={({ target: { value } }) => dispatch(editTitle(value, id))}
          onKeyDown={({ key, target: { value } }) =>
            handleInput(key, id, oldTitle, value)
          }
        />
      ) : (
        <span
          className={isCompleted ? "todo-title striked" : "todo-title"}
          onDoubleClick={() => dispatch(toggleTodoProperty(id, "isEditing"))}
        >
          {title}
        </span>
      )}
      <FontAwesomeIcon
        icon={faTrashAlt}
        onClick={() => dispatch(deleteTodo(id))}
        style={{ color: "red", marginLeft: "10px" }}
      />
    </div>
  );
}

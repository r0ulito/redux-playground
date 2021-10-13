import React from "react";
import { useDispatch } from "react-redux";

export function TodoFilter(props) {

  const dispatch = useDispatch();

  const setCurrentFilter = (type) => ({
    type
  })

  return (
    <div className="filter-container">
      <button className="filter-button" onClick={() => dispatch(setCurrentFilter("TODO_FILTER_ALL"))}>
        All
      </button>
      <button
        className="filter-button"
        onClick={() => dispatch(setCurrentFilter("TODO_FILTER_COMPLETE"))}
      >
        Completed
      </button>
      <button
        className="filter-button"
        onClick={() => dispatch(setCurrentFilter("TODO_FILTER_UNCOMPLETE"))}
      >
        Not completed
      </button>
    </div>
  );
}

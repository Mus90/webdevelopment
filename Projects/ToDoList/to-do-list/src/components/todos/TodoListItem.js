import React from "react";

const TodoListItem = (props) => {
  return (
    <div className="todo-item-container">
      <h3>{props.onChange}</h3>
      <div className="button-container">
        <button className="completed-button">Mark as completed</button>
        <button className="remove-button">Remove</button>
      </div>
    </div>
  );
};

export default TodoListItem;

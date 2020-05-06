import React from "react";

const NewTodoForm = (props) => {
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        onChange={props.changed}
      />
      <button className="new-todo-button">Create Todo</button>
    </div>
  );
};

export default NewTodoForm;

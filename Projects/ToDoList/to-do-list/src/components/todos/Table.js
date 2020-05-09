import React from "react";

const Table = (props) => {
  const { todos } = props;
  const todoList = todos.map((eachTodo) => {
    return (
      <div className="todoItem" key={eachTodo.id}>
        <div> todo: {eachTodo.todo}</div>
        <div> todoStatus: {eachTodo.todoStatus} </div>
        <button
          onClick={() => {
            props.deleteTodo(eachTodo.id);
          }}
        >
          Delete{" "}
        </button>
      </div>
    );
  });
  return <div className="todoList">{todoList}</div>;
};

export default Table;

import React from "react";
import { ListGroup } from "react-bootstrap";

const Table = (props) => {
  const todoList = props.todos.map((eachTodo) => {
    return (
      <div className="todoItem container" key={eachTodo.id}>
        <ListGroup.Item> {eachTodo.content}</ListGroup.Item>

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

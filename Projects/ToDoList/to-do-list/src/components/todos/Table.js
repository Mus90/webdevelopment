import React from "react";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import "./AddTodoForm.css";

const Table = (props) => {
  const todoList = props.todos.map((eachTodo) => {
    return (
      <div className="myForm" key={eachTodo.id}>
        <Container className="myContainer">
          <Row>
            <Col>
              <ListGroup.Item className="myItem">
                {" "}
                {eachTodo.content}
              </ListGroup.Item>
            </Col>
            <Col>
              <button
                className="mybutton"
                onClick={() => {
                  props.deleteTodo(eachTodo.id);
                }}
              >
                Delete{" "}
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  });
  return <div className="todoList">{todoList}</div>;
};

export default Table;

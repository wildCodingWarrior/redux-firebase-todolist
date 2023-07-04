import React, { useEffect } from "react";
import { styled } from "styled-components";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos } from "../redux/modules/todoSlice";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodos());
  }, []);

  return (
    <TodoListContainer>
      <div>
        <h2>해야 할 일</h2>
        {todos
          ?.filter((todo) => !todo.isDone)
          .map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
      </div>
      <div>
        <h2>이미 한 일</h2>
        {todos
          ?.filter((todo) => todo.isDone)
          .map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
      </div>
    </TodoListContainer>
  );
};

export default TodoList;

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;
  width: 80%;
  border: 1px solid black;
`;

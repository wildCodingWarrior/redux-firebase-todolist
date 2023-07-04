import React from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { updateTodo, deleteTodo } from "../redux/modules/todoSlice";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const TodoItem = (props) => {
  const { todo } = props;
  const { id, title, content, isDone } = todo;

  const dispatch = useDispatch();

  const handleClickForUpdate = async () => {
    dispatch(updateTodo(id));
    await updateDoc(doc(db, "todos", id), {
      ...todo,
      isDone: !isDone,
    });
  };

  const handleClickForDelete = async () => {
    dispatch(deleteTodo(id));
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <TodoItemContainer>
      <div>{title}</div>
      <div>{content}</div>
      <div
        onClick={() => {
          handleClickForUpdate();
        }}
      >
        {isDone ? "취소" : "완료"}
      </div>
      <div
        onClick={() => {
          handleClickForDelete();
        }}
      >
        삭제
      </div>
    </TodoItemContainer>
  );
};

export default TodoItem;

const TodoItemContainer = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
`;

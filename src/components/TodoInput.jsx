import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { addTodo } from "../redux/modules/todoSlice";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const handleClick = async () => {
    const newTodo = {
      title,
      content,
      isDone: false,
    };

    dispatch(addTodo(newTodo));
    await addDoc(collection(db, "todos"), newTodo);
  };

  return (
    <TodoInputContainer>
      제목
      <input
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      내용
      <input
        type="text"
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        추가
      </button>
    </TodoInputContainer>
  );
};

export default TodoInput;

const TodoInputContainer = styled.div``;

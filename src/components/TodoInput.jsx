import React from "react";
import { styled } from "styled-components";
import { useInput } from "../hooks/useInput";

const TodoInput = () => {
  const { content, handleClick, setContent, setTitle, title } = useInput();

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

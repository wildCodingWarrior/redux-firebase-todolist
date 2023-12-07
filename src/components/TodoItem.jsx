import React from "react";
import { styled } from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodoItem, updateTodoItem } from "../api/todos";

const TodoItem = (props) => {
  const { todo } = props;
  const { id, title, content, isDone } = todo;

  const queryClient = useQueryClient();

  const updateTodoMutation = useMutation({
    mutationFn: updateTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "todos" });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "todos" });
    },
  });

  return (
    <TodoItemContainer>
      <div>{title}</div>
      <div>{content}</div>
      <div
        onClick={() => {
          const newTodo = { ...todo, isDone: !isDone };

          updateTodoMutation.mutate(newTodo);
        }}
      >
        {isDone ? "취소" : "완료"}
      </div>
      <div
        onClick={() => {
          deleteTodoMutation.mutate(id);
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

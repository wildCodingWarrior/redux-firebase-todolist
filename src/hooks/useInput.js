import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodoItem } from "../api/todos";

export const useInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const queryClient = useQueryClient();

  const { mutate: addTodo } = useMutation({
    mutationFn: addTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "todos" });
      setTitle("");
      setContent("");
    },
  });

  const handleClick = async () => {
    const newTodo = {
      title,
      content,
      isDone: false,
    };

    addTodo(newTodo);
  };

  return { title, setTitle, content, setContent, handleClick };
};

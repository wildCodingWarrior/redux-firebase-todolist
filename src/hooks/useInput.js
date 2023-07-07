import { useState } from "react";
import { useTodo } from "./useTodo";

export const useInput = () => {
  const { addTodo } = useTodo();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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

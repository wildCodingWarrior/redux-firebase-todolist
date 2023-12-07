import { useState } from "react";
import { useTodos } from "./useTodos";

export const useInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addTodo } = useTodos();

  const handleClick = async () => {
    const newTodo = {
      title,
      content,
      isDone: false,
    };

    addTodo(newTodo);

    setTitle("");
    setContent("");
  };

  return { title, setTitle, content, setContent, handleClick };
};

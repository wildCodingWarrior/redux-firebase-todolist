import { useDispatch } from "react-redux";
import {
  __addTodo,
  __deleteTodo,
  __getTodos,
  __updateTodo,
} from "../redux/modules/todoSlice";
import { useEffect } from "react";

export const useTodo = () => {
  const dispatch = useDispatch();

  const getTodos = () => {
    dispatch(__getTodos());
  };

  const addTodo = (todoItem) => {
    dispatch(__addTodo(todoItem));
  };

  const updateTodo = (todoItem) => {
    dispatch(__updateTodo(todoItem));
  };
  const deleteTodo = (todoId) => {
    dispatch(__deleteTodo(todoId));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return { addTodo, updateTodo, deleteTodo };
};

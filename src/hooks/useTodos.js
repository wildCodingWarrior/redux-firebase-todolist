import {
  addTodoItem,
  deleteTodoItem,
  getTodos,
  updateTodoItem,
} from "../api/todos";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = "todos";

export const useTodos = () => {
  const queryClient = useQueryClient();

  const { data: todos } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: getTodos,
  });

  const addTodoMutation = useMutation({
    mutationFn: addTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: updateTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });

  return {
    todos,
    addTodo: addTodoMutation.mutate,
    updateTodo: updateTodoMutation.mutate,
    deleteTodo: deleteTodoMutation.mutate,
  };
};

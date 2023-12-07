import { baseApi } from "./base";

export const getTodos = async () => {
  const response = await baseApi.get("/todos");
  return response.data;
};

export const addTodoItem = async (todo) => {
  const response = await baseApi.post("/todos", todo);
  return response.data;
};

export const updateTodoItem = async (todo) => {
  const response = await baseApi.patch(`/todos/${todo.id}`, todo);
  return response.data;
};

export const deleteTodoItem = async (id) => {
  const response = await baseApi.delete(`/todos/${id}`);
  return response.data;
};

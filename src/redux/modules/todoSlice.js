import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const fetchTodos = async () => {
  const todoRef = collection(db, "todos");
  const querySnapshot = await getDocs(todoRef);

  const todos = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return todos;
};

export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (_, thunkAPI) => {
    try {
      const todos = await fetchTodos();
      return thunkAPI.fulfillWithValue(todos);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  todos: [],
};

export const counterSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action) => {
      const targetTodoId = action.payload;
      const targetTodo = state.todos.find((todo) => todo.id === targetTodoId);

      targetTodo.isDone = !targetTodo.isDone;
    },
    deleteTodo: (state, action) => {
      const targetTodoId = action.payload;

      state.todos = state.todos.filter((todo) => todo.id !== targetTodoId);
    },
  },
  extraReducers: {
    [__getTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTodos, addTodo, updateTodo, deleteTodo } =
  counterSlice.actions;

export default counterSlice.reducer;

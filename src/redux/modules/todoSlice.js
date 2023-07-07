import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const name = "todos";

export const __getTodos = createAsyncThunk(
  `${name}/getTodos`,
  async (_, thunkAPI) => {
    try {
      const todoRef = collection(db, "todos");
      const querySnapshot = await getDocs(todoRef);

      const todos = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      return thunkAPI.fulfillWithValue(todos);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addTodo = createAsyncThunk(
  `${name}/addTodo`,
  async (newTodo, thunkAPI) => {
    try {
      const todoRef = await addDoc(collection(db, "todos"), newTodo);
      const data = await getDoc(todoRef);

      const addedTodo = {
        id: data.id,
        ...data.data(),
      };

      return thunkAPI.fulfillWithValue(addedTodo);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateTodo = createAsyncThunk(
  `${name}/updateTodo`,
  async (targetTodo, thunkAPI) => {
    try {
      await updateDoc(doc(db, "todos", targetTodo.id), {
        ...targetTodo,
        isDone: !targetTodo.isDone,
      });
      return thunkAPI.fulfillWithValue(targetTodo.id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodo = createAsyncThunk(
  `${name}/deleteTodo`,
  async (targetTodoId, thunkAPI) => {
    try {
      await deleteDoc(doc(db, "todos", targetTodoId));
      return thunkAPI.fulfillWithValue(targetTodoId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  todos: [],
};

export const counterSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
    },
    [__addTodo.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
    [__updateTodo.fulfilled]: (state, action) => {
      const targetTodoId = action.payload;
      const targetTodo = state.todos.find((todo) => todo.id === targetTodoId);
      targetTodo.isDone = !targetTodo.isDone;
    },
    [__deleteTodo.fulfilled]: (state, action) => {
      const targetTodoId = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== targetTodoId);
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default counterSlice.reducer;

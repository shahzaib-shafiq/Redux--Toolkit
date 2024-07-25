import { createSlice, nanoid } from "@reduxjs/toolkit";

////nano id is used to generate unique id,s

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

// Function is not necessary to define here unless used elsewhere
function sayhello() {
  console.log("hello");
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Creating a new todo item
      const todo = {
        id: nanoid(),
        text: action.payload, // Using payload directly for text
      };
      // Adding new todo to the state
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      // Filtering out the todo with the matching id
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;

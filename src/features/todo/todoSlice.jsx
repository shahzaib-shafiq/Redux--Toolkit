//nano id is used to generate unique id,s
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

function sayhello() {
  console.log("hello");
}

//reducers contain properties and functions

reducers: {
    // addTodo: sayhello,

    addTodo: (state, action) => {
      //state is used to check initial state
      //action is used to perform opr i.d to give id to remove an element

      const todo = {
        //id: 1,
        id: nanoid(),
        //text: "Hello World",
        //also
        //  text:action.payload.text
        text: action.payload,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        todo.id !== action.payload;
      });
    },
    //updated reducer
  },

export const todoSlice = createSlice({
  name: "todo",
  initialState,
reducers:{...}
  

});

export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer
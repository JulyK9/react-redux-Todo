import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";


const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const ADD = "ADD";
// const DELETE = "DELETE";

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id
//   };
// };

const reducer = (state = [], action) => {
  switch (action.type) {
    // case ADD:
    case addToDo.type:
      console.log(addToDo.type);
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
}

// store.subscribe()

export default store;
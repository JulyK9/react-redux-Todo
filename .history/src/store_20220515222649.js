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

console.log(addToDo, deleteToDo);

const reducer = (state = [], action) => {
  switch (action.type) {
    // case ADD:
    case addToDo.type:
      return [{ text: action.text, id: Date.now() }, ...state];
    // case DELETE:
    case deleteToDo.type:
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
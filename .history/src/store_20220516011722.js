import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

// createAction : Action Creator 함수를 생성
// toolkit은 action 을 따로 정의하지 않아도 되고 간단하게 표현
// createAction 의 첫번째 인자는 type
const addToDo = createAction("ADD");  // action 의 이름(type)이 ADD
const deleteToDo = createAction("DELETE");  // action 의 이름(type)이 DELETE

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

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now()}); // state를 mutate하는 방식으로 가능!!
  },
  [deleteToDo]: (state, action) => {
    state.filter((toDo) => toDo.id !== action.payload)
  }
})

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     // case ADD:
//     case addToDo.type:
//       // createAction으로 만들어진 action은 default로 type과 payload를 가짐
//       // payload에 데이터를 담아줌
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     // case DELETE:
//     case deleteToDo.type:
//       // return state.filter((toDo) => toDo.id !== action.id);
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
}

// store.subscribe()

export default store;
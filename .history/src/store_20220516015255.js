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

// createReducer : Reducer 함수 생성
// createReducer 첫번째 인자 : initial state
const reducer = createReducer([], {
  // [addToDo]: action이 addToDo일때
  [addToDo]: (state, action) => {
    // state에 새로운 데이터를 push 함으로써 state를 mutate함
    // state를 mutate하는 경우에는 state를 return해주지 않아도 됨
    state.push({ text: action.payload, id: Date.now()}); // state를 mutate하는 방식으로 가능!!
    // JS지식 : 화살표 함수에서 중괄호{}로 감싸진 함수는 return문이 없으면 return값을 반환하지 않음
  },
  // [deleteToDo]: action이 deleteToDo일때
  [deleteToDo]: (state, action) => (
    // filter 조건의 true가 되는 값으로 새로운 state를 만들어서 return함
    // filter 같이 새로운 state를 만드는 경우에는 state를 return해줘야함
    state.filter((toDo) => toDo.id !== action.payload))
    // JS지식 : 화살표 함수에서 괄호()로 감싸진 부분이 return 된다(return문을 작성하지 않아도 return 됨)
});



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
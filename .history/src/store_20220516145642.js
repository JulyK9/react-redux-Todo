import { createStore } from "redux";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// createAction : Action Creator 함수를 생성
// toolkit은 action 을 더 간단하게 정의할 수 있음
// createAction 의 첫번째 인자는 type
// action 의 이름(type)이 ADD
// const addToDo = createAction("ADD"); 
// action 의 이름(type)이 DELETE
// const deleteToDo = createAction("DELETE"); 

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
// const reducer = createReducer([], {
//   // [addToDo]: action이 addToDo일때
//   [addToDo]: (state, action) => {
//     // state에 새로운 데이터를 push 함으로써 state를 mutate함 (push는 뭔가를 리턴하는게 아니라 state를 mutate하는 것임)
//     // state를 mutate하는 경우에는 state를 return해주지 않아도 됨
//     state.push({ text: action.payload, id: Date.now()}); // state를 mutate하는 방식으로 가능!!
//     // JS지식 : 화살표 함수에서 중괄호{}로 감싸진 함수는 return문이 없으면 return값을 반환하지 않음
//   },
//   // [deleteToDo]: action이 deleteToDo일때
//   [deleteToDo]: (state, action) => {
//     // filter 조건의 true가 되는 값으로 새로운 state를 만들어서 return함
//     // filter 같이 새로운 state를 만드는 경우에는 state를 return해줘야함 (즉, 뭔가를 리턴할 때는 꼭 새로운 state여야 함)
//     return state.filter((toDo) => toDo.id !== action.payload);
//   },
  // JS지식 : return을 생략하고 중괄호{}를 생략하여 작성할 수 있지만 return 을 생략할때는 {}중괄호도 함께 생략해야함
// });

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


const toDos = createSlice({
  name: 'toDosReducer', 
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now()});
    },
    remove: (state, action) => { return state.filter((toDo) => toDo.id !== action.payload)}
  }
});

// toDos의 createSlice가 Reducer를 우리에게 자동으로 전달해줌
// const store = configureStore({ reducer: toDos.reducer });

// const store = createStore(reducer);

export const { add, remove } = toDos.actions;

// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };

// store.subscribe()

// export default store;
export default configureStore({ reducer: toDos.reducer });

# React Redux todo

## 리액트 리덕스 투두

📌 react-router-dom 

😊 최신버전 v6 로 바뀐 기준
  - package.json react-router-dom 설치여부 확인
  - 설치 : npm install react-router-dom
  - App.js 안에서 전체적인 렌더 구조 세팅
  - BrowswerRouter 태그로 컴포넌트 감싸주기
  - Routes 컴포넌트 사용 : 여러 Route 를 감싸서 그중 규칙이 일치하는 라우트 단 하나만 렌더하는 역할
  - Route 컴포넌트 사용 : path 속성에 경로, element 속성에 컴포넌트를 넣어줌(여러 라우팅 매칭시 URL 뒤에 *)
  - react-router-dom과 각 페이지 컴포넌트 import 놓치지 말 것

😊 src > pages 폴더내 만들기
  - Home : 메인 페이지
  - Detail : 상세 페이지

✔ 참고자료
  - 리액트 doc : https://reactrouter.com/docs/en/v6/upgrading/v5#relative-routes-and-links
  - 참고글 : https://goddaehee.tistory.com/305


< store에 있는 state를 가져와서 component에 전달 >

📌 Connect
  - components 들을 store 에 연결시켜줌
  - 2개의 arguments 를 가짐 : state(mapStateProps) 와 dispatch(mapDispatchProps)

📌 mapStateToProps 함수 (여기선 getCurrentState)
  - redux store 로부터 state를 가져와서 comeponent(여기선 Home)에 prop으로써 전달할 때 사용
  - 보통 함수명은 mapStateToProps 하는게 국룰
  - 두 종류의 arguments 와 함께 호출됨(state, ownProps)
  - state : from redux store
  - props : from component

✔ 참고자료
  - connect 등 참고글 : https://selfish-developer.com/entry/connect  https://dev-seolleung2.netlify.app/development/Redux(4)/

✔ 최근에 바뀐 내용들 (connect 함수 안씀)
  - 참고사이트 https://juhi.tistory.com/23  https://darrengwon.tistory.com/559 https://www.samdawson.dev/article/react-redux-use-selector-vs-connect  https://velog.io/@hyunn/useSelector-%EC%B5%9C%EC%A0%81%ED%99%94
  - useSelector : store 에 저장된 state를 가져오는 역할 (mapStateProps 역할과 비슷)
  - useDispatch : dispatch 를 날림, 생성한 action을 발생시킴 (maptDispatchProps 역할과 비슷?)

< component가 dispatch 액션을 동작 >

📌 mapDispatchToProps 함수
  - connect의 2번째 argument 임


## Redux Toolkit

📌 Redux toolkit
  - redux를 적은량의 코드로 같은 기능을 하게 해주는 package 같은 것

😊 기존 프로젝트에 패키지 추가
  - npm install @reduxjs/toolkit

😊 createAction
  - action 을 따로 정의하지 않아도 되고 간단하게 표현
  - createAction("action명") : action 의 이름이 type 명 이 됨
  - 2번째 인자는 text, id 설정해주는게 아니라 payload 라는 인자로 동반할 수 있음 

😊 createReducer
  - action을 더 간단하게 정의할 수 있음
  - swtch, case 문 대신에 더 간단하게 표현할 수 있게 해주며,
  - 새로운 state를 리턴하거나 'state를 mutate할 수 있음'(툴킷은 immer 라는게 뒤에서 돌아가기 때문에 mutate 가능하다고 함)

😊 configureStore
  - redux 미들웨어와 함께 store를 생성함 (꼭 toolkit을 설치해야 configureStore를 쓸수 있는 건 아님)
  - 기존 createStore 와 크게 다르진 않지만 Redux DevTools 를 사용할 수 있음
  - Redux DevTools로 dispatch된 action과 history, state 변경사항들을 보기 편함
  - redux 로 만들어진 사이트에서 켜서 상태추적 및 변화를 분석하기도 좋음

😊 createSlice
  - 코드를 더 압축시킬 수 있음(안에 있는 모든 것을 캡슐화 해줌)
  - reducer 뿐만 아니라 action도 생성해줌 (즉 action과 reducer함수의 생성을 동시에 하게 해줌)
  - createSlice 옵션
    name: 모듈의 이름
    initialState: state의 초기값 설정
    reducers: reducer를 작성, reducer의 key값으로 action함수가 자동으로 생성됨

✔ 요약정리 참고 : https://velog.io/@iamhayoung/Redux-Toolkit-createAction-createReducer-configureStore-createSlice


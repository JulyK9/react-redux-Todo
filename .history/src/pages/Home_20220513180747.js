import React, { useState } from 'react';
import { connect } from 'react-redux';

const Home = () => {
  const [text, setText] = useState ("");
  const onChange = (e) => {
    setText(() => e.target.value);
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  }

  return (
    <div>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} ></input>
        <button>Add</button>
      </form>
      <ul></ul>
    </div>
  )
}

const getCurrentState = (state, ownProps) => {
  console.log(state, ownProps);
}

export default connect(getCurrentState) (Home);
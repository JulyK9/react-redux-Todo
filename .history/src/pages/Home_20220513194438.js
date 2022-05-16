import React, { useState } from 'react';
import { connect } from 'react-redux';

const Home = (props) => {
  console.log(props);
  const [text, setText] = useState ("");
  const onChange = (e) => {
    setText(e.target.value);
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  }

  return (
    <>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  )
}

const getCurrentState = (state, ownProps) => {
  return { sexy: true };
}

export default connect(getCurrentState) (Home);
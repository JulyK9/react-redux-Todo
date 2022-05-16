import React, { useState } from 'react';
import { connect } from 'react-redux';

function Home (props) {
  console.log(props);
  const [text, setText] = useState ("");
  function onChange(e) {
    setText(e.target.value);
  }
  
  function onSubmit (e) {
    e.preventDefault();
    setText("");
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
  );
}

const getCurrentState = (state, ownProps) => {
  return { toDos : state };
}

export default connect(getCurrentState)(Home);
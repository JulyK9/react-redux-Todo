import React, { useState } from 'react';
import { connect } from 'react-redux';

function Home (toDos) {
  // console.log(props);
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
      <ul>
        {JSON.stringify(toDos)};
      </ul>
    </>
  );
}

const mapStateToProps = (state) => {
  return { state };
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
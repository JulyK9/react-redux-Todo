import React, { useState } from 'react';

const Home = () => {
  const [text, setText] = useState ("");
  const onChange = (e) => {
    setText(() => e.target.value);
  }
  
  return (
    <div>
      <h1>To do</h1>
      <form>
        <input type="text" value={text}></input>
      </form>
      <ul></ul>
    </div>
  )
}

export default Home;
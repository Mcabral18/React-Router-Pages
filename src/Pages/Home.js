import React from 'react';
import { useState } from "react";

function Home() {
  const [greeting, setGreeting] = useState('Welcome to React');
  const [isShow, setShow] = React.useState(true);

  const handleToggle = () => {
    setShow(!isShow);
  };

  const handleChange = (event) => {
    setGreeting(event.target.value)
  }

  return (
    <>
      <input type="text" value={greeting} onChange={handleChange} />
      <h1>{greeting}</h1>;


      <button onClick={handleToggle} type="button">
        Toggle
      </button>

      {isShow ?
        <h1>hello</h1>
        : null}
    </>
  )
}

export default Home;
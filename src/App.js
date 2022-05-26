import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [topics, settopics] = useState([]);
  const addClick = () => {
    const mytopics = prompt('Enter Your Topics', 'Topics......');
    settopics([...topics, mytopics]);
  };
  return (
    <div>
      <button onClick={addClick}>Click Me</button>
      <h1>Hooks : {topics?.length} </h1>
      {topics?.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
}

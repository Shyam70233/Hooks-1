import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [x, setX] = useState(0);
  return (
    <div>
      <h1>Hooks useState : {x} </h1>
      <button onClick={() => setX(x + 1)}>+</button>
      <button onClick={() => setX(x - 1)}>-</button>
      <button onClick={() => setX(0)}>0</button>
    </div>
  );
}

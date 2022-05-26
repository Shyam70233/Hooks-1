import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [x, setx] = useState(0);

  const abc = () => {
    if (x < 6000) {
      setTimeout(() => setx(x + 1), 100);
    }
  };

  useEffect(abc, [x]);
  return (
    <div>
      <h1>Hello Time : {x} </h1>
    </div>
  );
}

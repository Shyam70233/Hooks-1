import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';

export default function App() {
  const [a, seta] = useState([]);
  const abc = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((d) => seta(d.data));
  };
  useEffect(abc, []);
  return (
    <div>
      <h2>Total Length {a.length}</h2>;
      {a.map((x) => (
        <h4>{x.id}</h4>
      ))}
      
    </div>
  );
}

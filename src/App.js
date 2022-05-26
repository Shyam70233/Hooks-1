import React, { useState, useEffect } from 'react';
import { useWindow } from './hooks';
import './style.css';

export default function App() {
  const { width, height } = useWindow();
  return (
    <div>
      <h1>Width: {width}</h1>
      <h1>Height: {height}</h1>
    </div>
  );
}

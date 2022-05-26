import React, { useEffect, useState } from 'react';

export const useWindow = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const xyz = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const abc = () => {
    window.addEventListener('load', xyz);
    window.addEventListener('resize', xyz);
  };
  useEffect(abc, []);
  return {
    width: width,
    height: height,
  };
};

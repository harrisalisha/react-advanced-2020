import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(()=> {
    window.addEventListener('resize', checkSize);
    return 
    console.log('cleanup');
    window.removeEventListener('resize, chwckSize');
    //always good practice to clean up after call useEffect
  }, []);

  console.log('render');
  return (
    <>
    <h1> window</h1>
    <h2>{ size }PX</h2>
    </>
  )
};

export default UseEffectCleanup;

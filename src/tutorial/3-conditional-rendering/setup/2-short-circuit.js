import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setError ] = useState(false);

 //  const firstValue = text || 'Tahu tempe';
 //const secondValue = text && 'hello world;
 //useState '' , if text '' then 'hello world
   
  return <>
    <h2>short circuit</h2>
    {/*<h2>{firstValue}</h2>
    <h2>Value: { secondValue }</h2>*/}
    {/*{if(){console.log('hello world')}}//doesnt work */}
  <h1>{text || 'john doe'}</h1>
  <button className="btn" onClick={() => setError(!isError)}>toggle error</button>
  {
    isError && <h1>Error...</h1>
  }
  {
    isError ? <p>there is an error...</p> : <div><h2>there is no Error</h2></div>
  }
  </>  
};

export default ShortCircuit;


{/**  <h2>{text && 'hello world'}</h2>
  <h2>{!text && 'hello world'}</h2>
  const [text, setText] = useState('');
 text is falsy (empty) // || 
  const firstValue = text || 'Tahu tempe , then set 'tahu tempe

   const [text, setText] = useState('kk');// &&
   text is true, then set to hello word
   const secondValue = text && 'hello world';
   if text is falsy or not true then nothing get rendered

*/}
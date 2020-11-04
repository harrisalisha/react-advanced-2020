import React, { useState } from 'react';

//useState -is function
const UseStateBasics = () => {
  //console.log(useState('hello world'));
  //const value = usestate(1)[0];
  //const handler = useState(1)[1];
  //console.log(value, handler);
  
  const [text, setText] = useState('random title'); 
  const handleClick = ()=> {
    if( text === 'random title'){
      setText('Hello World!!'); 
    }else{
    setText('random title');
    }
  }
  return (
    <React.Fragment>
      <h1>{ text }</h1>
      <button type="button" className="btn" onClick={ handleClick }> Change Text</button>
    </React.Fragment>
  )
};

export default UseStateBasics;

//component start w Capital
//useState always inside the Component
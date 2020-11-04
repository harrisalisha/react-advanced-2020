import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson ] = useState({
    name: 'peter',
    age: 24,
    message: 'random message'
  }); // can pass obj or var
  //console.log(person);

  const [name,setName] = useState('peter')
  const [age,setAge] = useState(24)
  const [message,setMessage] = useState('random message')

  const changeMessage = () => {
    //setPerson({...person, message: 'hello world!!'});
    setMessage('Hello world!!');
  };// remember to preseve the value used spread operator

  return (
    <>
      <h3>{ name}</h3>
      <h3>{ age}</h3>
      <h3>{ message}</h3>
      <button onClick={()=>{ changeMessage()}}>change message</button>
    </>
 
  );
};

export default UseStateObject;

import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
 // const [firstName, setFirstName] = useState('');
 // const [email, setEmail] = useState('');
 // const [age, setAge] = useState('');
  const [person, setPerson] = useState({
    firstName: '',
    email: '',
    age: ''
  });
  const [people, setPeople] = useState([]);
  
  //multiple inputs
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
   // console.log(name, value);
    setPerson({...person, [name]: value});//dynamic Object keys
      console.log({...person});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    //submit if
    if(person.firstName && person.email && person.age){
      const newPerson = { ...person, id: new Date().getTime().toString()};
      setPeople([...people, newPerson]);//remember setPeople is in []
      setPerson({firstName:'', email: '', age: ''});
    }
  }

  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>add person</button>
        </form>
      </article>    
      <article>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div key={id} className='item' >
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;

//form w multiple input
//[name] what ever name in input , n value
// on button onClick={}, on form onSubmit={}
//onChange is react s
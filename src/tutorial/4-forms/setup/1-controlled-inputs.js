import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');// empty string is falsy value
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit =(e) => {
    e.preventDefault();// e is event object
    //console.log(firstName, email);
    if(firstName && email){
      const person = {id: new Date().getTime().toString(), firstName, email };
      console.log(person);
      setPeople((people) => {
        return [...people, person];//...keep old people data so not loose it n so add person
      });
      setFirstName('');
      setEmail('');

    }else{
      console.log('empty value');
    }
  };

  return <>
    <article>
      {/*<form className="form" onSubmit={handleSubmit}>*/}
      <form className="form" onSubmit={handleSubmit}> 
        <div className="form-control">
          <label htmlFor="firstName">Name :</label>
          <input 
            type="text" 
            id="firstName" 
            name='firstNames' 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} />

        </div>
        <div className="form-control">
          <label htmlFor="email">Email :</label>
          <input 
            type="text" 
            id="email" 
            name='email' 
            value={ email } 
            onChange={(e) => setEmail(e.target.value)} />

        </div>
        <button type='submit'>add person</button>
      </form>
    </article>
    <article> 
       {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      
    </article>
  </>
};

export default ControlledInputs;


// there two place to put submit, in form  or submit btn
//remenber to set value={} and onChange={} in input event target value
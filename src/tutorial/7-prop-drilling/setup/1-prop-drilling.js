import React, { useState } from 'react';
import { data } from '../../../data';

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id)=> {
    return people.filter((person) => {
      return person.id !== id
    })
  }
  return <section>
      <h2>prop drilling</h2>
      <List people={people} removePerson ={removePerson}/>
    </section>  
};

const List =({people, removePerson}) => {
  return <>
   {
     people.map((person)=> {
       return <SinglePerson key={person.id} 
       {...person} 
       removePerson = {removePerson} />
       
     })
    }
  </>
}
  
const SinglePerson = ({ id , name, removePerson}) => {
  return <div className="item">
    <h4>{name}</h4>
    <button onClick={() => removePerson(id)}>remove</button>
   
  </div>
};

export default PropDrilling;

// the only way to pass down 
// in this expl how to pass fn props down to singlePerson through List
// propdrilling , removePerson() we pass to singlePerson()  via List()
//so the way to do it is pass fn removePerson() to <List />
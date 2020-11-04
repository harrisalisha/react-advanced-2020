import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)


//useContext, is avoid unnecessary passing data through the component
//but instead send to the last child component that need it
//1 create context 
const personContext = React.createContext();
//this get two component  - Provider, Consumer 
//Provider works as distributor
//we need to return rootcomponent then provider
//why bcause provider has value props
//we also can use useContext to access the value of use contect value

//root component
const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <personContext.Provider value={{removePerson, people}} >
      <h3>useContext</h3>
      <List />
    </personContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(personContext);
  console.log(mainData);
  return (
    <>
      {mainData.people.map((person) => {
        return (
          <SinglePerson key={person.id} {...person} />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name}) => {
  const {removePerson } = useContext(personContext);
  
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;


//personContext wrap whole component tree

import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  //console.log(useParams);//return object w id string , check our data id is number
  const {id} = useParams();// string
  const [name, setName] = useState('default name');

  useEffect(()=> {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, [])

  return (
    <div>
      <h2>{name}</h2>
      <Link to="/people" className="btn" >Back to People</Link>
    </div>
  );
};

export default Person;

//this file is place holder for data person
//inorder to access, import useParams 
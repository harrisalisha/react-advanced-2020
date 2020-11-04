import React from "react";
import { data } from "../../../data"; //array of data

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  
  const removeItem = (id) => {
    let newPeople = people.filter((person)=>
      person.id !== id);
    setPeople(newPeople);//new array 
  };
  return (
    <>
      {people.map((person) => {
        //console.log(people);
        //do destructuring
        const { name, id } = person;
        return (
          <div key={id} className="item">
            <h3>{name}</h3>
            <button onClick={()=> { removeItem(id)}}>remove item</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};
export default UseStateArray;

// always remember when working w array must include unique id, key={id}
//line 12 important

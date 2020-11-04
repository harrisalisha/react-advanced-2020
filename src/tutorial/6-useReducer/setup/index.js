import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import {reducer} from './reducer';

//state
const defaultState = {
  //people is[] we set to data
  people: [],
  isModalOpen: false,
  modalContent: ''
}

const Index = () => {
  const [name, setName] = useState('');
 // const [people, setPeople] = useState(data);
 // const [showModal, setShowModal] = useState(false);//hide
 const [state, dispatch] = useReducer(reducer, defaultState);//reducer is function

  const handleSubmit = (e)=> {
    e.preventDefault();
    if(name){
      const newItem ={ id: new Date().getTime().toString(), name }
      dispatch({type: 'ADD_ITEM', payload: newItem});
      setName('');
    }else{
      dispatch({type: 'NO_VALUE'});
    }
  };

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'});
  };

  return <>
    <h2>useReducer</h2>
    {state.isModalOpen && (
    <Modal closeModal={closeModal} modalContent={state.modalContent} /> )}
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <input 
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value) }
          />
      </div>
      <button type="submit"> add submit</button>
    </form>
    {
      state.people.map((person)=>{
        return (
          <div key={person.id} className='item'>
            <h2>{person.name}</h2>
            <button 
              onClick={() => 
                dispatch({type: 'REMOVE_ITEM', payload: person.id})
              }
            >remove</button>
          </div>
        )
      })
    }
  </>
  
};

export default Index;

//useReducer looking for reducer we getting back state n dispatch
//useReducer(reducer, defaultState//initialState
//dispatch({type: }) 
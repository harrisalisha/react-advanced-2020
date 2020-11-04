//reducer changing to effect state, state is old state 

 export const reducer = (state, action )=> {
    //console.log(state, action);
    if(action.type === 'ADD_ITEM'){
      const newPeople = [...state.people, action.payload ];
      //return new State, but remember to copy old state b4 update
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: 'item added'
      };
    }
    if(action.type === 'NO_VALUE'){
      return {...state, isModalOpen: true, modalContent: 'please enter  value'};
    }
    if(action.type === 'CLOSE_MODAL'){
      return {...state, isModalOpen: false};
    }
    if (action.type === 'REMOVE_ITEM') {
      const newPeople = state.people.filter(
        (person) => person.id !== action.payload
      );
      return { ...state, people: newPeople };
    }
    throw new Error ('no matching action type');
    //return state;
  };//reducer always return state, then add
  
// can use export default reducer  
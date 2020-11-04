import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(()=> {
    setIsLoading(true);
    fetch(url)
    .then((resp)=> {
      if(resp.status >= 200 && resp.status<= 299){
        return resp.json();
      }else{
        setIsLoading(false);
        setError(true);
        throw new Error(resp.statusText);
      }
    })
    //.then((user)=> console.log(user))
    .then((user)=> {
      const { login } = user;
      setUser(login);
      setIsLoading(false);
    })
    .catch((error)=> console.log(error));
  }, []);

  if(isLoading){
    return <div>
      <h2>Loading...</h2>
    </div> 
  }
  if(isError){
    return <div>
      <h2>Error...</h2>
    </div> 
  }

  return <div>
    <h2>{user}</h2>
  </div> 
};

export default MultipleReturns;

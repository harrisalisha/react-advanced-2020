import React from 'react';

const ErrorExample = () => {
  let title = 'random title';//remeber {} in jsx to access variable
  const handleChangeTitle = ()=> {
    title = 'hello people'
    console.log(title);
  }
  return (
    <React.Fragment>
      <h2>{ title }</h2>
      <button type="button" className="btn" onClick={ handleChangeTitle }>change title</button>
    </React.Fragment>
  );
}
export default ErrorExample;

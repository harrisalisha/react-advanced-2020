import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow ] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>show/hide</button>
      {
        show && <Item />
      }
    </>
  )
};

const Item = () => {
  const [size, setSize ] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    }
  }, []);
  return ( <div>
    <h1 style={{marginTop: '2rem'}}>window</h1>
  <h2>size : {size}</h2>
  </div>
  )
}

export default ShowHide;


//it is important to have clean up function, even though 
//useEffect had  [], we must do clean up function because
// toggling window will rerender window innerwidth
//so must return clean up function
// return () => {
//  window.removeEventListener('resize', checkSize);
//}
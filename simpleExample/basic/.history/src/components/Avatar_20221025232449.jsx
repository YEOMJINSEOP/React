import React from 'react';

function Avatar(props) {
  return (
    <div>
      <img 
      className='photo'
      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80" alt="" />
      {props.isNew && <span className='new'>New</span> }
    </div>
  );
}

export default Avatar;
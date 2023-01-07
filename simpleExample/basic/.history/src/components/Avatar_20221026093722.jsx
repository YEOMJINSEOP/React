import React from 'react';

function Avatar(props) {
  return (
    <div className='avatar'>
      <img className='photo'
      src={props.image} alt="" />
      {props.isNew && <span className='new'>New</span> }
    </div>
  );
}

export default Avatar;
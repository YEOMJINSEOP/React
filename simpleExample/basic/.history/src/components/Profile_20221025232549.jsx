import React from 'react';
import Avatar from './Avatar';

function Profile(props) {
  return (
    <div className='profile'>
      <Avatar image={image} isNew={isNeew} />
      <h1 className='name'>
        {props.name}
      </h1>
      <h2 className='job'>
        {props.job}
      </h2>
    </div>
  );
}

export default Profile;
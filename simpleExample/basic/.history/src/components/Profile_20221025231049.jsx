import React from 'react';

function Profile(props) {
  return (
    <>
      <img className='image'
      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80" alt="" />
      <h1 className='name'>
        {props.name}
      </h1>
      <h2 className='job'>
        {props.job}
      </h2>
      </>
  );
}

export default Profile;
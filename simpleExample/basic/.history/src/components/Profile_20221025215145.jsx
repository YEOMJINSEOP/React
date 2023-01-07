import { prompts } from 'inquirer';
import React from 'react';

export default function Profile(props) {
  return (
    <div className='profile'>
      <img className='photo'
      src={props.image}
      alt=''
      />
      <h1>{props.title}</h1>
      <p>Front-end Developer</p>
    </div>
  );
}



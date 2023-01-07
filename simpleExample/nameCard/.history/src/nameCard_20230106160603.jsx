import React from 'react';
import Avatar from './\bavatar';
import './nameCard.css';
function NameCard({name, profileImage, isNew}) {

  return (
    <div class='nameCard'>
      <Avatar profileImage={profileImage}/>
      <span class='name'>{name}</span>
      {isNew && <span class='isNew'>new</span>} 
    </div>
  );
}

export default NameCard;

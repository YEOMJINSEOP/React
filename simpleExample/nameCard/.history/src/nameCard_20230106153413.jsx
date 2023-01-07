import React from 'react';
import './nameCard.css';
function NameCard({name, profileImage, isNew}) {

  return (
    <div class='nameCard'>
      <img class='profileImage'
        src = {profileImage}
        alt = 'profile'
        >
      </img>
      <span class='name'>{name}</span>
      {isNew && <span class='isNew'>new</span>} 
    </div>
  );
}

export default NameCard;

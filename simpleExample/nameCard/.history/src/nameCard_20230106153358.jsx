import React from 'react';
import './nameCard.css';
function NameCard({name, profileImage, isNew}) {

  return (
    <div class='nameCard'>
      <img class='profileImage'
        src = {profileImage}
        alt = 'profile'
        >
      {isNew && <span class='isNew'>new</span>} 
      </img>
      <span class='name'>{name}</span>
    </div>
  );
}

export default NameCard;

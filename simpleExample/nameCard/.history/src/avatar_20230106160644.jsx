import React from 'react';

function Avatar({profileImage}) {
  return (
    <>
      <img class='profileImage'
        src = {profileImage}
        alt = 'profile'
        >
      </img>
    </>
  );
}

export default Avatar;
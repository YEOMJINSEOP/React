import React from 'react';

function Header(props) {
  return (
    <div className={styles.header}>
      <input type="text" placeholder='Search...' />
    </div>
  );
}

export default Header;
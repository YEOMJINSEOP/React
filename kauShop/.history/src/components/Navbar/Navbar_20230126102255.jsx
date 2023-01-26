import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div>
      <Link to='/'>
        Logo
      </Link>
    </div>
  );
}

export default Navbar;
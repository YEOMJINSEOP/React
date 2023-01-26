import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div>
      <Link to='/'>
        Logo
      </Link>
      <button>로그인</button>
      
    </div>
  );
}

export default Navbar;
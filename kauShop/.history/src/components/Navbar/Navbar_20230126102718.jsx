import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';

function Navbar(props) {
  return (
    <div>
      <Link to='/'>
        Logo
      </Link>
      <AiOutlineShopping/>
      <button>로그인</button>
    </div>
  );
}

export default Navbar;
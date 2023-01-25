import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <header>
      <Link to='/'>
        Shoppy
      </Link>
      <nav>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Carts</Link>
        <Link to='/products/new'>Add</Link>
        <button>Login</button>
      </nav>
    </header>
  );
}

export default Navbar;
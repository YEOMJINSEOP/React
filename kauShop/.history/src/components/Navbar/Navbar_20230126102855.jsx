import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import styles from './Navbar.module.css';

function Navbar(props) {
  return (
    <div className={styles.navbar}>
      <Link to='/'>
        Logo
      </Link>
      <div>
        <AiOutlineShoppingCart/>
        <button>로그인</button>
      </div>
    </div>
  );
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import styles from './Navbar.module.css';
import {login} from '../../api/firebase';
function Navbar(props) {
  return (
    <div className={styles.navbar}>
      <Link to='/'>
        Logo
      </Link>
      <div className={styles.menu}>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link></Link>
        <Link></Link>
      </div>
      <div className={styles.user}>
        <Link to='/cart'><AiOutlineShoppingCart/></Link>
        <button onClick={login()}>로그인</button>
      </div>
    </div>
  );
}

export default Navbar;
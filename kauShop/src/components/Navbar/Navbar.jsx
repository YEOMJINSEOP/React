import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import styles from './Navbar.module.css';
import {login, logout, onUserStateChange} from '../../api/firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import User from '../User/User';
function Navbar(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    })
  })

  const handleLogin = () => {
    login().then(setUser);
  };

  const handleLogout = () => {
    logout().then(setUser);
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.logoAndMenu}>
        <Link to='/'>
          Logo
        </Link>
        <div className={styles.menu}>
          <ul className={styles.menuList}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.user}>
        <Link to='/cart'><AiOutlineShoppingCart/></Link>
        {user && <User user={user}/>}
        {!user && <button onClick={handleLogin}>로그인</button>}
        {user && <button onClick={handleLogout}>로그아웃</button>}
      </div>
    </div>
  );
}

export default Navbar;
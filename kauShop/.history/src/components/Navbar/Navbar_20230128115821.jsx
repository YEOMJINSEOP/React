import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';
import styles from './Navbar.module.css';
import {getAdmins, login, logout, onUserStateChange} from '../../api/firebase';
import User from '../User/User';
import { useAuthContext } from '../../context/AuthContext';
function Navbar(props) {
  const {user, login, logout} = useAuthContext();

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
        {user && <Link to='/cart'><CartStatus/></Link>}
        {user && user.isAdmin && (
          <Link to='/admin'>
            <FiSettings/>
          </Link>
        )}
        {user && <User user={user}/>}
        {!user && <button onClick={login}>로그인</button>}
        {user && <button onClick={logout}>로그아웃</button>}
      </div>
    </div>
  );
}

export default Navbar;
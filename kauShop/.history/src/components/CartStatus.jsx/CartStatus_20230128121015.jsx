import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { getCart } from '../../api/firebase';
import { useAuthContext } from '../../context/AuthContext';
import styles from './CartStatus.module.css';
function CartStatus(props) {
  const {user} = useAuthContext();
  const {data: products} = useQuery(['carts'], () => getCart(user.uid));
  return (
    <div>
      <AiOutlineShoppingCart className={styles.cartIcon}/>
      {products && <p className={styles.cartStatus}>{products.length}</p>}
    </div>
  );
}

export default CartStatus;
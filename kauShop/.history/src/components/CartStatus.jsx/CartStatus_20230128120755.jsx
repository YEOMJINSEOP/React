import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { getCart } from '../../api/firebase';
import { useAuthContext } from '../../context/AuthContext';
function CartStatus(props) {
  const {user} = useAuthContext();
  const {data: products} = useQuery(['carts'], () => getCart(user.uid));
  return (
    <div>
      <AiOutlineShoppingCart/>
      {products && <p>products.length</p>}
    </div>
  );
}

export default CartStatus;
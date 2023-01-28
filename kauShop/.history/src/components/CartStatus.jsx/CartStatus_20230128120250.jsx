import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { getCart } from '../../api/firebase';
function CartStatus(props) {
  const {user: {uid}} = useAuthContext();
  const {data: products} = useQuery(['carts'], getCart(uid));
  return (
    <div>
      <AiOutlineShoppingCart/>
      {products && products.length}
    </div>
  );
}

export default CartStatus;
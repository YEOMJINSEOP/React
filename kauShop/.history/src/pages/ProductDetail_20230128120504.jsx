import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { addOrUpdateCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

function ProductDetail(props) {
  // react-router-dom이 제공하는 state
  const {
    state: {
      product: {id, image, title, description, category, price, options }
  }
} = useLocation();

const [selected, setSelected] = useState(options && options[0]);
const handleSelect = (e) => {
  setSelected(e.target.value);
}

const {user} = useAuthContext();
const handleClick = (e) => {
  const product = {id, image, title, price, option: selected, quantity: 1};
  console.log(user.uid);
  addOrUpdateCart(user.uid, product);
}
  return (
    <section>
      <p>{category}</p>
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{description}</p>
        <p>옵션:</p>
        <select onChange={handleSelect} value={selected}>
          {options && options.map((option, index) => 
          <option key={index}> {option}</option>)}
        </select>
      <button onClick={handleClick}>
        장바구니에 추가
      </button>
      </div>
    </section>
  );
}

export default ProductDetail;
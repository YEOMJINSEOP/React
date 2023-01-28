import React from 'react';
import { useLocation } from 'react-router-dom';

function ProductDetail(props) {
  // react-router-dom이 제공하는 state
  const {
    state: {
      product: {id, image, title, description, category, price, options }
  }
} = useLocation();
  return (
    <section>
      <p>{category}</p>
      <img src={image} alt="" />
    </section>
  );
}

export default ProductDetail;
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function ProductDetail(props) {
  // react-router-dom이 제공하는 state
  const {
    state: {
      product: {id, image, title, description, category, price, options }
  }
} = useLocation();

const [selected, setSelected] = useState(options && options[0]);
  return (
    <section>
      <p>{category}</p>
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{description}</p>
        <p>옵션:</p>
      </div>
    </section>
  );
}

export default ProductDetail;
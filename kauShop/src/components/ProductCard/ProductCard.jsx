import React from 'react';

function ProductCard({product}) {
  const {id, image, title, category, price} = product;
  return (
    <li>
      <img src={image} alt={title}/>
      <div>
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
      <p>{category}</p>
    </li>
  );
}

export default ProductCard;
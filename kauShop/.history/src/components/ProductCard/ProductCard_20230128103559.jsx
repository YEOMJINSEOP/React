import React from 'react';

function ProductCard({product}) {
  const {id, image, title, category, price} = product;
  return (
    <li>
      {title}
    </li>
  );
}

export default ProductCard;
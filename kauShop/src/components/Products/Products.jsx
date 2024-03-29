import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getProducts } from '../../api/firebase';
import ProductCard from '../ProductCard/ProductCard';

function Products(props) {
  const {isLoading, error, data: products} = useQuery(['products'], getProducts);
  return (
    <>
     {isLoading &&  <p>Loading...</p>} 
     {error && <p>{error}</p>}
     <ul>
      {products && products.map(product => (
        <ProductCard key={product.id} product={product}/>
        ))}
     </ul>
    </>
  );
}

export default Products;
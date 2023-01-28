import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getProducts } from '../../api/firebase';

function Products(props) {
  const {isLoading, error, data: products} = useQuery(['products'], getProducts);
  return (
    <>
     {isLoading &&  <p>Loading...</p>} 
     {error && <p>{error}</p>}
    </>
  );
}

export default Products;
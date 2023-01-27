import React from 'react';
import { useState } from 'react';

function Admin(props) {
  const [product, setProduct] = useState({});

  const handleChange = (e) => {
    const {name, value, files} = e.target;
    setProduct({...product, [name]: value});
  };
  const handleSubmit = (e) => {

  };
  return (
    <section>
      제품 추가하기
      <form onSubmit={handleSubmit}>
        <input 
          type="file" 
          accept='image/*' 
          name='file' 
          required 
          onChange={handleChange}
        />
        <input 
            type="text" 
            name='title' 
            value={product.title ?? ''} 
            placeholder='제품명'
            required
            onChange={handleChange}
        />
        <input
          type='number'
          name='price'
          value={product.price ?? ''}
          placeholder='가격'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='category'
          value={product.category ?? ''}
          placeholder='카테고리'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='description'
          value={product.description ?? ''}
          placeholder='제품 설명'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='options'
          value={product.options ?? ''}
          placeholder='옵션들(콤마(,))로 구분'
          required
          onChange={handleChange}
        />
      </form>
    </section>
  );
}

export default Admin;
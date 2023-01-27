import React from 'react';
import { useState } from 'react';

function Admin(props) {
  const [product, setProduct] = useState({});
  const handleChange = (e) => {
    console.log(e.target);
    // const {name, value, files} = e.target;
    // setProduct({...product, [name]: value});
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
          onChange={handleChange}>
        </input>
        <input type="text"></input>
      </form>
    </section>
  );
}

export default Admin;
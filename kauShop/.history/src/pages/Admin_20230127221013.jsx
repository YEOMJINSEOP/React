import { upload } from '@testing-library/user-event/dist/upload';
import React from 'react';
import { useState } from 'react';
import { addNewProduct } from '../api/firebase';
import { uploadImage } from '../api/uploader';

function Admin(props) {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const handleChange = (e) => {
    const {name, value, files} = e.target;
    if(name === 'file'){
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({...product, [name]: value}));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage(file)
    .then(imageUrl => {
      addNewProduct(product, imageUrl);
    })
    // 제품의 사진을 Cloudinary에 업로드하고, URL을 획득
    // Firebase에 새로운 제품을 추가함
  };
  return (
    <section>
      {file && <img src={URL.createObjectURL(file)} alt='local file'/>}
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
        <button>{isUploading ? '업로드중...' : '제품 등록하기'}</button>
      </form>
    </section>
  );
}

export default Admin;
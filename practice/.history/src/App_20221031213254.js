import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('/data/product.json')
    .then(res => res.json())
    .then( data => {
      console.log('데이터를 불러왔습니다.');
      setProduct(data);
      // console.log(product);
    }
    )
  }, [])

  return (
    <>
      <input 
        type="text"
        id='product'
        name='product'
        placeholder='상품을 입력하세요..'
      ></input>
    </>
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [product, setProduct] = useState([]);
  const [inputStr, setInputStr] = useState('');
  const [relProduct, setRelProduct] = useState([]);

  useEffect(() => {
    fetch('/data/product.json')
    .then(res => res.json())
    .then( data => {
      console.log('데이터를 불러왔습니다.');
      setProduct(data);
    })
    
  }, [])

  return (
    <>
      <div>
        <input 
          type="text"
          id='product'
          name='product'
          placeholder='상품을 입력하세요..'
          onChange = {
            (e) => {
              setInputStr(e.target.value);
              console.log(e.target.value);

            }
          }
        >
        </input>

      </div>

      <div class='container'>
        <ul onClick={(e) => {
          console.log(e.target.innerText);
          setInputStr(e.target.innerText);
        }}>
          {product.filter((item) => {
            if(inputStr == ""){return}
            else if(item.name.toLowerCase().includes(inputStr.toLowerCase())){
              return item
            }
          }).map((item) => {
            return <li class='list'><button>{item.name}</button></li>
          })
          }
        </ul>
      </div>

      {/* <select size= {product.length}>
        {product.filter((item) => {
          if(inputStr == ""){return item}
          else if(item.name.includes(inputStr)){
            count += 1;
            console.log(count);
            return item
          }
        }).map((item) => {
          setRelProduct(relProduct, item);
          console.log(setRelProduct);
          // return <option>{item.name}</option>
        })}
      </select> */}




    </>
  );
}

export default App;

import React, { useReducer, useState } from 'react';
import './AppBurger.css';
import burgerReducer from './basic/\breducer/burger-reducer';

export default function AppBurger(props) {
  // const [burger, setBurger] = useState(initialBurger);

  // https://reactjs.org/docs/hooks-reference.html#usereducer
  const [burger, dispatch] = useReducer(burgerReducer, initialBurger)
  // state(burger)에 접근할 수 있는 변수와 reducer를 호출할 수 있는 dispatch 함수를 받아와서 
  // useReducer를 사용한다.
  // dispatch 함수는 setBurger로 새로운 burger를 업데이트한 것 처럼,
  // 원하는 action을 명령할 수 있다.
  // useReducer에는 객체를 새롭게 만들어 나갈 로직을 작성한 reducer와 초기값을 인자로 받는다.
  


  const handleUpdate = () => {
    const prevIng = prompt(`어떤 재료를 바꾸실래요?🧑‍🍳`)
    const curIng = prompt(`어떤 재료로 바꾸시고 싶나요?🧑‍🍳`);
    // dispatch에 원하는 action 객체를 전달한다.
    // dispatch가 호출되면, useReducer가 burgerReducer를 호출한다.
    // 이 때 기존의 burger 객체와 함께, dispatch에 전달한 action 객체를 전달해준다.
    dispatch({type: 'updated', prevIng, curIng});
    // setBurger((prevBurger) => ({
    //   ...prevBurger, ingredients: prevBurger.ingredients.map((ing) => {
    //   if(ing.name === prevIng){
    //     return {name: curIng, origin:ing.origin}
    //   }
    //   else{
    //       return ing
    //     }
    //   })
    // }));
  }

  const handleAdd = () => {
    const name = prompt(`어떤 재료를 넣으실래요?🧑‍🍳`);
    const origin = prompt(`어느 원산지로 정할까요?🧑‍🍳`)
    dispatch({type: 'added', name, origin});
    // setBurger((prevBurger) => ({
    //   ...prevBurger, ingredients: [...prevBurger.ingredients, {
    //     name: name,
    //     origin: origin
    //   }]
    // }))
  }

  const handleDelete = () => {
    const name = prompt(`어떤 재료를 빼실건가요?🧑‍🍳`);
    dispatch({type:'deleted', name});
    // setBurger((prevBurger) => ({
    //   ...prevBurger, ingredients: prevBurger.ingredients.filter((ing) => 
    //   ing.name !== name
    // )}))
  }

  return (
    <div>
      <h1>
       🍔 {burger.name}의 브랜드는 {burger.brand}
      </h1>
      <p>{burger.name}의 재료는</p>
      <ul>
        {burger.ingredients.map((ing, index) => (
          <li key={index}>
            {ing.name} ({ing.origin})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>Burger 재료 바꾸기 🥬🥩</button>
      <button onClick={handleAdd}>Burger 새로운 재료 추가하기 🥬🥩</button>
      <button onClick={handleDelete}>Burger 재료 빼기 🥬🥩</button>
    </div>
  );
}

const initialBurger = {
  name: 'BigMac',
  brand: 'McDondalds',
  ingredients: [{
    name: 'beef',
    origin: 'US'
  },
  {
    name: 'bread',
    origin: 'Canada'
  }]
};





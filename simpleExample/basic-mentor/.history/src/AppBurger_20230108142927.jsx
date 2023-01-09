import React, { useState } from 'react';
import './AppBurger.css';
export default function AppBurger(props) {
  const [burger, setBurger] = useState({
    name: 'BigMac',
    brand: 'McDondalds',
    ingredients: [{
      name: 'beef',
      origin: 'US'
    },
    {
      name: 'bread',
      origin: 'Canada'
    }
  ]
  });
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
      <button
        onClick={() => {
          const prevIng = prompt(`어떤 재료를 바꾸실래요?🧑‍🍳`)
          const curIng = prompt(`어떤 재료로 바꾸시고 싶나요?🧑‍🍳`);
          setBurger((prevBurger) => ({
            ...prevBurger, ingredients: prevBurger.ingredients.map((ing) => {
            if(ing.name === prevIng){
              return {name: curIng, origin:ing.origin}
            }
            else{
              return ing
            }
          }) }))
        }}
      >
        Burger 재료 바꾸기 🥬🥩
      </button>

      <button
        onClick={() => {
          const name = prompt(`어떤 재료를 넣으실래요?🧑‍🍳`);
          const origin = prompt(`어느 원산지로 정할까요?🧑‍🍳`)
          setBurger((prevBurger) => ({
            ...prevBurger, ingredients: [...prevBurger.ingredients, {
              name: name,
              origin: origin
            }]
          }))
        }}
      >
        Burger 새로운 재료 추가하기 🥬🥩
      </button>

      <button
        onClick={() => {
          const name = prompt(`어떤 재료로 바꾸실래요?🧑‍🍳`);
          setBurger((prev) => ({...prev, ingredient: {...prev.ingredient, name: name} }))
        }}
      >
        Burger 재료 빼기 🥬🥩
      </button>
    </div>
  );
}

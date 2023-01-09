import React, { useState } from 'react';
import './AppBurger.css';
export default function AppBurger(props) {
  const [burger, setBurger] = useState({
    name: 'BigMac',
    brand: 'McDondalds',
    ingredient: {
      name: 'beef',
      origin: 'US'
    },
  });
  return (
    <div>
      <h1>
       🍔 {burger.name}의 브랜드는 {burger.brand}
      </h1>
      <p>
        {burger.name}의 재료는 {burger.ingredient.name} ({burger.ingredient.origin})
      </p>
      <button
        onClick={() => {
          const name = prompt(`What's Burger name?`);
          setBurger((prev) => ({...prev, ingredient: {...prev.ingredient, name: name} }))
        }}
      >
        Burger 재료 바꾸기 🥬🥩
      </button>
    </div>
  );
}

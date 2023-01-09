import React, { useReducer, useState } from 'react';
import './AppBurger.css';
import {useImmer} from 'use-immer';

export default function AppBurger(props) {
  const [burger, updateBurger] = useImmer(initialBurger);

  const handleUpdate = () => {
    const prevIng = prompt(`어떤 재료를 바꾸실래요?🧑‍🍳`)
    const curIng = prompt(`어떤 재료로 바꾸시고 싶나요?🧑‍🍳`);
    updateBurger((burger) => {
      const ingredient = burger.ingredients.find((ing) => ing.name === prevIng);
      ingredient.name = curIng;
    });
  }

  const handleAdd = () => {
    const name = prompt(`어떤 재료를 넣으실래요?🧑‍🍳`);
    const origin = prompt(`어느 원산지로 정할까요?🧑‍🍳`)
    setBurger((prevBurger) => ({
      ...prevBurger, ingredients: [...prevBurger.ingredients, {
        name: name,
        origin: origin
      }]
    }))
  }

  const handleDelete = () => {
    const name = prompt(`어떤 재료를 빼실건가요?🧑‍🍳`);
    setBurger((prevBurger) => ({
      ...prevBurger, ingredients: prevBurger.ingredients.filter((ing) => 
      ing.name !== name
    )}))
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





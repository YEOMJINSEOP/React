// 컴포넌트가 아니기 때문에 일반 js 파일로 만듦

function burgerReducer(burger, action){
  switch(action.type){
    case 'updated':
      const {prev, current} = action;
      return {
        ...prevBurger, 
        ingredients: prevBurger.ingredients.map((ing) => {
          if(ing.name === prevIng){
            return {...ing, name: curIng};
          }
          else{
            return ing;
          }
        })
      }
  }
}
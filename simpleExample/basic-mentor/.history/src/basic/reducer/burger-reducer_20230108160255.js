// 컴포넌트가 아니기 때문에 일반 js 파일로 만듦
// 기존의 burger와, 어떤 action을 원하는지 객체를 전달받아서
// action의 타입에 따라 해당하는 액션에 필요한 데이터를 받아온다.
// 이후 기존의 burger를 update, 추가, 삭제해주고 있다.
// 앞에서 살펴본 것과 똑같다.
export default function burgerReducer(burger, action){
  switch(action.type){
    case 'updated':
      const {prevIng, curIng} = action;
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

    case 'added': {
      const {name, origin} = action;
      return {
        ...prevBurger, 
        ingredients: [...prevBurger.ingredients, {
          name: name,
          origin: origin
        }]
      }
    }

    case 'deleted': {
      const {name} = action;
      return {
        ...prevBurger, ingredients: prevBurger.ingredients.filter((ing) => 
        ing.name !== name
      )
      }    
    }

    default: {
      throw Error('알수 없는 액션 타입: `${action.type}`')
    }

  }
}
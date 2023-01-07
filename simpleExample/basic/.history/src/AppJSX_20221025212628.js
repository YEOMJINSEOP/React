import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = 'ellie';
  const list = ['우유', '딸기', '바나나', '푸딩'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hi!</h2>
      <p>{name}</p>
      <ul>
        {
          list.map((item) => (<li>{item}</li>) )
        }
      </ul>
    
      <img
      src=''
      alt=''
      />
    </>
  )
}

export default AppJSX;

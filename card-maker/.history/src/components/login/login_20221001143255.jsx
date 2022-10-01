import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({authService}) => {
  
  const navigate = useNavigate();

  //Login 되면 Maker로 이동
  const goToMaker = (userId) => {
    navigate({
      pathname: '/maker',
      state: {id: userId},
    });
  }

  const onLogin = event => {
    authService//
    .login(event.currentTarget.textContent)
    .then(data => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService
    .onAuthChange(user => {
      user && goToMaker(user.uid);
    })
    //Maker에 user.uid 전달
  });


  return(
    <section>
      <Header/>
      <section className={styles.login}>
        <h1 className={styles.title}>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>Google</button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
      <Footer/>
    </section>
  )
};

export default Login;
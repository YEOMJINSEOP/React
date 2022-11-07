import React from 'react';
import styles from './form.module.css';

function Form(props) {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.locationContainer}>
          <input className={styles.departure} type="text">
            <p>출발지</p>
          </input>
          <input className={styles.arrival} type="text"/>
        </div>
        <div className={styles.infoContainer}>
          <input className={styles.remainingTime} type="text" />
          <input className={styles.recruitment} type="text" />
          <input className={styles.transport} type="text" />
        </div>
        <div className={styles.titleContainer}>
          <input className={styles.title} type="text" />
        </div>
        <div className={styles.contentContainer}>
          <input className={styles.content} type="text" />
        </div>
      </form>
    </div>
  );
}

export default Form;
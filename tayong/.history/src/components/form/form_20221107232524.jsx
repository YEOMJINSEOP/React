import React from 'react';
import styles from './form.module.css';

function Form(props) {
  return (
      <form className={styles.form}>
        <div className={styles.location}>
          <input type="text"/>
          <input type="text"/>
        </div>
      </form>
  );
}

export default Form;
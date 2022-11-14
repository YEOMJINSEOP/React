import React from 'react';
import styles from './meetDetail.module.css'

function MeetDetail(props) {
  return (
    <div className={styles.container}>
        <img className={styles.imgTransport} src="https://img.freepik.com/free-photo/taxi-sign-roof-top-car_74190-1728.jpg?w=1800&t=st=1667398413~exp=1667399013~hmac=efcccc4afa78711c2ff1407418bf496be6c0ddf73fe37c1c3ecf06f936d5bc24" alt="transport image" />
        <input className={styles.title} type="text" id='title' name='title' value='글제목'/>
        <div className={styles.info}>
          <div className={styles.recruitment}>
            <label htmlFor='recruitment'>모집인원</label>
            <input type="text" id='recruitment' name='recruitment' maxLength='1' value='1'/>
            <p>명</p>
          </div>

          <div className={styles.remainingTime}>
            <label htmlFor='remainingTime'>마감시간</label>
            <input type="text" id='remainingTime' name='remainingTime' onChange={(e) => {setRemainingTime(e.target.value)}}/>
            <FiCalendar className={styles.calendarIcon}/>
          </div>
        </div>
    </div>
  );
}

export default MeetDetail;
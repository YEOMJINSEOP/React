import React from 'react';
import './app.css';
import NameCard from './nameCard';

function App() {
  return(
    <>
      <NameCard name={'Chris'} profileImage={'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}/>
      <NameCard name={'Liam'} profileImag={'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80'}/>
    </>
  )
}

export default App;

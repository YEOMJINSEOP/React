import React from 'react';
import './app.css';
import NameCard from './nameCard';

function App() {
  return(
    <>
      <NameCard name={'Chris'} profileImage={'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'}/>
      <NameCard name={'Liam'} profileImag={'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'}/>
    </>
  )
}

export default App;

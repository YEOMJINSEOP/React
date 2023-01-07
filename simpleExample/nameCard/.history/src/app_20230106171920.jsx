import React from 'react';
import './app.css';
import NameCard from './nameCard';

function App() {
  return(
    <>
      <NameCard name={'Anne'} isNew={true} profileImage={'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}/>
      <NameCard name={'Liam'} isNew={false} profileImage={'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}/>
    </>
  )
}

export default App;

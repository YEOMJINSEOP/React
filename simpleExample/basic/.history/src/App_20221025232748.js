import './App.css';
import Profile from './components/Profile';

function AppProfile() {
  return (
    <>
    <Profile image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80" name='ellie' job='engineer' isNew={true}/>
    <Profile name='minji' job='singer'/>
    </>
  );
}

export default AppProfile;

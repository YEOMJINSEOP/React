import './App.css';
import Profile from './components/Profile';

function AppProfile() {
  return (
    <>
    <Profile name='ellie' job='engineer' isNew={true}/>
    <Profile name='minji' job='singer'/>
    </>
  );
}

export default AppProfile;

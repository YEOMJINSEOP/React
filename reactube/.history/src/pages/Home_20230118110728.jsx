import React, { useState } from 'react';
import Header from '../components/header/Header';
import VideoList from '../components/videoList/VideoList';
function Home(props) {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  }
  return (
    <>
      <Header handleSearch={handleSearch} />
      <VideoList search={search}/>
    </>
  );
}

export default Home;
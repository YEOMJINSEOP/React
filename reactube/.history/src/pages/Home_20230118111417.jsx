import React, { useState } from 'react';
import Header from '../components/header/Header';
import VideoList from '../components/videoList/VideoList';
function Home(props) {
  const [search, setSearch] = useState('');
  const handleSearch = (search) => {
    setSearch(search);
  }
  return (
    <>
      <Header handleSearch={handleSearch} />
      <VideoList search={search}/>
    </>
  );
}

export default Home;
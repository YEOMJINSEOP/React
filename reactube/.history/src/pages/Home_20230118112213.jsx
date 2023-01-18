import React, { useState } from 'react';
import Header from '../components/header/Header';
import VideoList from '../components/videoList/VideoList';
function Home(props) {
  return (
    <>
      <Header/>
      <VideoList/>
    </>
  );
}

export default Home;
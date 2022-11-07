import React from 'react';
import { Form } from 'react-router-dom';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';

function Create(props) {
  return (
    <>
      <Header/>
      <Form/>
      <Footer/>
    </>
  );
}

export default Create;
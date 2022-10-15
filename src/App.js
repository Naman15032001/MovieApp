import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import React from 'react';
import Banner from './Components/Banner';
import Movies from './Components/Movies'

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Movies/>
    </>

  );
}

export default App;

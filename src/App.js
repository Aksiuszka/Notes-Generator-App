import React from 'react'
import './App.css';
import SingleNote from './components/Note/SingleNote';
import Logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <div className="header">
      <img src={Logo} alt="Logo"/>
      </div>
     <SingleNote/>
    </div>
  );
}

export default App;

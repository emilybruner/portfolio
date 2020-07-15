import React from 'react';
import './App.css';
import './sass/_main.scss'
import Home from './components/Home'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;

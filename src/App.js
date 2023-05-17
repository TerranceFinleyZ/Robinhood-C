import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Newsfeed from './Newsfeed';
import Stats from './Stats';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      {/* Header */}
    <div className="app__header">
      <Header />
    </div>
    <div className="app__body">
      <div className="app__container">
        <Newsfeed />
        {/* stats */}
        <Stats />
      </div>
    </div>
    {/* Body */}
  </div>  
  );
}

export default App;

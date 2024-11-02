import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let name = 'react';

  return (
    <div className="container">
      <h1 className = "test"> Hello, {
        name === 'react' ? ("YES") :null
      }!! </h1>
      <p>반갑습니다.</p>
    </div>
  );
}


export default App;

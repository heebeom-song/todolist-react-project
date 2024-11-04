import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Todolist';
import MapTest from './MapTest';
import Timer from './Timer';
import Clock from './Timer';

function App() {
  let name = 'react';

  return (
    <div className="container">
      <TodoList></TodoList>
      <Clock></Clock>
    </div>
  );
}


export default App;

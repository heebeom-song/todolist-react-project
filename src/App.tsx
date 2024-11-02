import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Todolist';
import MapTest from './MapTest';

function App() {
  let name = 'react';

  return (
    <div className="container">
      <TodoList></TodoList>
    </div>
  );
}


export default App;

import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm'


function App() {
  return (
    <div className="App">
      <div className="Title">Todo List</div>
     
      <TodoForm />
    </div>
  );
}

export default App;

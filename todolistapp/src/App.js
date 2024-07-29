import AddItem from './additem';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const additem = ({ text, dueDate }) => {
    const newTodo = { text, dueDate, id: Date.now() };
    setTodos([...todos, newTodo]);
  };

  

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddItem addItem={additem} />
      
    </div>
  );
}



export default App;

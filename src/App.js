import React from "react";
import './App.css';

import Form from './components/Form.js';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App">
      <header>
      <h1>ToDo List</h1>
      </header>
      <Form />
      <TodoList/>
    </div>
  );
}

export default App;

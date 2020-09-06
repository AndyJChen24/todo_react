import React, { useState } from 'react';
import './App.css';
// import components
import Form from './components/Form'
import TodoList from './components/TodoList'
function App() {
  // set input text from text box
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      {/* pass  down state as props*/}
      <Form todos ={todos} setTodos={setTodos} inputText={inputText}setInputText={setInputText}/>
      <TodoList todos ={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

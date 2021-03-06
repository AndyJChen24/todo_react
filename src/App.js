import React, { useState, useEffect } from 'react';
import './App.css';
// import components
import Form from './components/Form'
import TodoList from './components/TodoList'
function App() {
  // set input text from text box
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] =useState([]); 

  // run once 
  useEffect(()=>{
    getLocalTodos();
  }, [])
  // run this everytime todos changes or status changes
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  }, [todos, status])


  // filter function
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed===true))
        break;
      case 'uncompleted':  
        setFilteredTodos(todos.filter(todo => todo.completed===false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  const saveLocalTodos = () =>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  
  const getLocalTodos= () =>{
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
    }
  }



  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      {/* pass  down state as props*/}
      <Form 
        todos ={todos} 
        setTodos={setTodos} 
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList 
        todos ={todos} 
        setTodos={setTodos} 
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;

import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) =>{
    // handle user input text
    const inputTextHandler =(e) =>{
        // set user input to state
        setInputText(e.target.value)
    }

    const submitTodoHandler =(e) =>{
        // prevent page refresh on click
        e.preventDefault();
        // add a new todo to list of todo array 
        setTodos([...todos, {text: inputText, completed:false, id:Math.random()*1000}]);
        //clear state once submit button is pushed
        setInputText('')
    }

    const statusHandler = (e) =>{
        setStatus(e.target.value)
    }
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div onChange={statusHandler} className="select">
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;
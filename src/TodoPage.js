import React, { useState } from 'react'
import './TodoPage.css'
const TodoPage = () => {
    const [todo,setTodo] = useState("");
    const [todoList,setTododList] = useState([]);
    const handleAddTodo = (e) => {
        e.preventDefault();
        console.log(todo);
        setTododList(prevTodoList => {
            const newTodoList = [...prevTodoList, todo];
            console.log(newTodoList); // Log the new state
            return newTodoList;
        });
        setTodo("");
    }

    const handleRemoveTodo = (index,e) => {
        e.preventDefault();
        const newTodos = [...todoList];
        console.log(index);
        newTodos.splice(index,1);
        setTododList(newTodos);
    }
  return (
    <div>
      <div className='box' id="heading">
        <h1>
            Hello World
        </h1>
    </div>

    <div className='box'>
        {/* <div className='item'>
            <input type="checkbox" />
            <p>Item 1</p>
        </div>
        <div className='item'>
            <input type="checkbox" />
            <p>Item 1</p>
        </div>
        <div className='item'>
            <input type="checkbox" />
            <p>Item 1</p>
        </div> */}

        {
            todoList.map((todoitem,i) => {
                return(
                <div className='item' key={i}>
                    <input type="checkbox" onChange={(e) => {handleRemoveTodo(i,e)}}/>
                    <p>{todoitem}</p>
                </div>
                )               
            })
        }

        <form className='item'>
            <input type="text" name="newTodo" placeholder="New Item" autoComplete="off" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button type="submit" name="listSubmit" onClick={handleAddTodo}>+</button>
        </form>
    </div>
    </div>
  )
}

export default TodoPage

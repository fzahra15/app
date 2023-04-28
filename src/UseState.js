import React, { useState } from 'react'

function UseState() {
    const [todos, setTodos]  = useState([])
    const [todo,setTodo] = useState()

    const submitHandle = e =>{
        e.preventDefault()
        setTodos([...todos,todo])
        setTodo('')
    }


  return (
    <div>
        <h1>To Do App</h1>
        <form onSubmit={submitHandle}>
            <input type="text" value={todo}  onChange={e => setTodo(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
        <ul>
            {
                todos.map((todo,i)=>{
                    return(
                      <li key={i}>{todo}</li>  
                    )
                    
                })
            }
        </ul>
    </div>
  )
}

export default UseState
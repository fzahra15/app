import React, { useReducer, useCallback, useState, useMemo } from 'react'
import AddTodo from './components/AddTodo'
import Header from './components/Header';
import Todos from './components/Todos'
import reducer from './Reducer';
function UseReducer() {

    console.log('app rendered');

    const [count, setCount] = useState(0)

    const [state, dispatch] = useReducer(reducer,{
        todos:[],
        todo:'',
        search:''
    })
    const submitHandle = useCallback(e =>{
            e.preventDefault()
            dispatch({
                type: 'ADD_TODO',
                todo:state.todo
            })
        }
    )
    const inpChange = useCallback(e=>{
        dispatch({
            type:'SET_TODO',
            value: e.target.value
        })
    })

    const searchHandle = e =>{
        dispatch({
            type:'SET_SEARCH',
            value:e.target.value
        })
    }

    const filteredTodos =useMemo(()=> {
        return state.todos.filter(todo => todo.toLowerCase().includes(state.search.toLowerCase()))
    },[state.todos,state.search])
  return (
    <div>
        {/* <h3>{count}</h3>
        <button onClick={()=> setCount(count => count+1)}>click</button> */}

        {/* <Header /> */}
        <h1>To Do App with reducer</h1>
        <hr />
        <input type="text" placeholder='Search what to do' value={state.search} onChange={searchHandle} />
        <h2>{state.search}</h2>
        <AddTodo inpChange={inpChange} submitHandle={submitHandle} todo={state.todo} />
        <Todos todos={filteredTodos} />
    
    </div>
  )
}

export default UseReducer
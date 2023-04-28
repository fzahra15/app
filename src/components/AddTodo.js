import React, { memo } from 'react'

function AddTodo({submitHandle,inpChange, todo}) {
    console.log('Add To  Do renndered');
    return (
        <form onSubmit={submitHandle}>
            <input type="text" value={todo} onChange={inpChange} />
            <button disabled={!todo} type='submit'>Add</button>
        </form>
    )
}

export default memo(AddTodo)
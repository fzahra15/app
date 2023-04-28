import React, { memo } from 'react'
import TodoItem from './TodoItem';

function Todos({todos}) {
    console.log('Todos Render');
    return (
        <ul>
            {
                todos.map((todo, i) =><TodoItem todo={todo} key={i} /> )
            }
        </ul>
    )
}

export default memo(Todos) 
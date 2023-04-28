import React, { memo } from 'react'

function TodoItem({todo}) {
    console.log('Todo Item rendered');
  return (
    <li>{todo}</li>
  )
}

export default memo(TodoItem) 
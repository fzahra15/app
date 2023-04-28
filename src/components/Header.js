import React, { memo } from 'react'

function Header() {
    console.log('header rendered');
  return (
    <div>Header</div>
  )
}

export default memo(Header) 
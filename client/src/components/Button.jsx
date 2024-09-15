import React from 'react'

const Button = ({name}) => {
  return (
    <div className='border bg-orange-500 w-20 grid rounded-lg font-bold my-3'>
      <button>{name}</button>
    </div>
  )
}

export default Button;
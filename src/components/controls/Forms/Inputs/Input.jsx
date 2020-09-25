import React from 'react'
import './Input.scss'

const Input = ({ type, name, placeholder, value, onChange}) => { 
  return (
    <div className="Input">
      <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
  )
}

export default Input
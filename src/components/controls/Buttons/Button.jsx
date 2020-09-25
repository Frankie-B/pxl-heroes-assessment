import React from 'react'
import './Button.scss'

const STYLES = [
  'btn--primary',
  'btn--outline'
];
const SIZES = [
  'btn--medium',
  'btn--large'
];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkBtnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkBtnSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <div className="Button">
      <button className={`btn ${checkBtnStyle} ${checkBtnSize}`} onClick={onClick} type={type}>{children}</button>
    </div>
  )
}


export default Button
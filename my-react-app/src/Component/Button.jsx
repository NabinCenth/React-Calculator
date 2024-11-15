import React from 'react'
import './Button.css'
const Button = ({onClick,onclear,onEqual}) => {
  return (
   <>
  
  <div className="num">
                <div className="row1">
                    <button onClick={onClick} className="num7 ">7</button>
                    <button onClick={onClick} className="num8 ">8</button>
                    <button onClick={onClick} className="num9 ">9</button>
                    <button onClick={onClick} className="divide ">/</button>
                </div>
                
                <div  className="row2">
                    <button onClick={onClick} className="num4 ">4</button>
                    <button onClick={onClick} className="num5 ">5</button>
                    <button onClick={onClick} className="num6 ">6</button>
                    <button onClick={onClick} className="subtract ">-</button>
                </div>
                
                <div  className="row3">
                    <button onClick={onClick} className="num1 ">1</button>
                    <button onClick={onClick} className="num2 ">2</button>
                    <button onClick={onClick} className="num3 ">3</button>
                    <button onClick={onClick} className="add ">+</button>
                </div>
                
                <div  className="row4">
                    <button onClick={onClick} className="num0 ">0</button>
                    <button onClick={onclear}  className="clear ">C</button>
                    <button onClick={onEqual} className="equals ">=</button>  
                     <button onClick={onClick} className="multiply ">*</button>
                </div>
                
                </div>

   </>
  )
}

export default Button

import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Component/Button'
import Display1 from './Component/Display1'



function App() {
  const [values, setValues] = useState([]);
//Value in the display 
const[value,setValue]=useState('');
//onlick everybutton


const handleClick= (e)=>{ 
  setValue((prevValue) => prevValue + e.target.innerText);
  setValues((prevValues) => [...prevValues,e.target.innerText ]);
}

//onclick "C"
const handleclear=()=>{ setValue("")
  setValues([]);
}
const calculate = (num1, operator, num2) => {
  try {
    return eval(`${num1} ${operator} ${num2}`);
  } catch {
    return "Invalid Operator";
  }
};
//onclick "="
const handleEqual= (e)=>{
   setValue((prevValue) => prevValue + e.target.innerText);
   console.log(values);
   let operatorIndex =values.indexOf("+") ||
   values.indexOf("-") ||
   values.indexOf("*") ||
   values.indexOf("/");
 ;
   const firstNumber = parseInt(values.slice(0, operatorIndex).join(""));
const secondNumber = parseInt(values.slice(operatorIndex  ).join(""));
const operator= values.filter(item => isNaN(item));
console.log(firstNumber,secondNumber);
console.log(firstNumber,operator[0] );

console.log(calculate(firstNumber,operator[0],secondNumber));
let result =calculate(firstNumber,operator[0],secondNumber);
setValue(value+" = "+calculate(firstNumber,operator[0],secondNumber)==="NaN"?"Error Wrong Input":+calculate(firstNumber,operator[0],secondNumber))
setValues([]);
setValues([result]);
}
  return (
    <>
<Display1 val={value} />
    <Button onClick={handleClick} onclear={handleclear} onEqual={handleEqual} />
      </>
  )
}

export default App

import { useState } from "react"

function App() {

  const [value, setValue]=useState(0)

  const add= ()=>{
    setValue((oldValue)=>(oldValue+=1))
  }
  const sub= ()=>{
    setValue((oldValue)=>(oldValue-=1))
  }

  return (
    <div className="countComponent">
      <button className="countComponent-btn-minus" onClick={sub}>-</button>
      <div className="countComponent-text">
        <span>{value}</span>
      </div>
      <button className="countComponent-btn-plus" onClick={add}>+</button>
    </div>
  )
}

export default App

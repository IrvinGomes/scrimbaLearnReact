import "./App.css";
import Box from "./components/box";
import data from "../public/boxes.js";
import { useState } from "react";

function App() {
  const [boxes, setBoxes] = useState(data);

  const handleBoxClick = (id:number) => {
    setBoxes((preValue: any)=>{
      const newValue:any = []
      preValue.map((value:any)=>{
        value.id!==id?newValue.push({...value}):newValue.push({...value, on:!value.on})
      })
      return newValue
    })
  };

  const boxesComponent = () => {
    return boxes.map((box: any) => {
      return <Box key={box.id} {...box} handleBoxClick={handleBoxClick} />;
    });
  };

  return <div className="box-wrapper">{boxesComponent()}</div>;
}

export default App;

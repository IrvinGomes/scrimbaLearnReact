import "./App.css";
import Box from "./components/box";
import data from "../public/boxes.js";
import { useState } from "react";

function App() {
  const [boxes, setBoxes] = useState(data);

  const handleBoxClick = (id:number) => {
    setBoxes((preValue: any)=>{
      return preValue.map((box:any)=>{
        return box.id === id? {...box, on:!box.on}:box
      })
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

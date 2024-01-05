import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = ()=>{
    setDarkMode(prevValue=>!prevValue)
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;

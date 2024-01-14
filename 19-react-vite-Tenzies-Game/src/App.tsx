import { useState } from "react";
import "./App.css";
import GameWrapper from "./components/GameWrapper";
import ConfettiExplosion from "react-confetti-explosion";

function App() {
  const [tenzies, setTenzies] = useState(false);
  return (
    <div className="app">
      {tenzies && (
        <ConfettiExplosion
          force={1}
          duration={3000}
          particleCount={300}
          width={1600}
        />
      )}
      <GameWrapper tenzies={tenzies} setTenzies={setTenzies} />
    </div>
  );
}

export default App;

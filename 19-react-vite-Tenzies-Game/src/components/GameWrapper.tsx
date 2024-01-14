import { useEffect, useState } from "react";
import Die from "./Die";

interface iDie {
  value: number;
  selected: boolean;
}

const GameWrapper: React.FC<any> = () => {
  const [diceArray, setDiceArray] = useState<iDie[]>([]);

  const getRandom = () => {
    return Math.ceil(Math.random() * 6);
  };

  const selectDie = (index: number) => {
    console.log(index);
  };

  useEffect(() => {
    setDiceArray(() => {
      const array = [];
      for (let i = 0; i < 10; i++) {
        array.push({ value: getRandom(), selected: true });
      }
      return array;
    });
  }, []);

  return (
    <div className="gameWrapper">
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls
      </p>
      <div className="gameWrapper-dieBox">
        {diceArray.map((die: iDie, index: number) => (
          <Die die={die} key={index} selectDie={() => selectDie(index)} />
        ))}
      </div>
      <button className="gameWrapper-rollBtn">
        <h4>Roll</h4>
      </button>
    </div>
  );
};
export default GameWrapper;

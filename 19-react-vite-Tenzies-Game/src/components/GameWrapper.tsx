import { useEffect, useState } from "react";
import Die from "./Die";

interface iDie {
  value: number;
  selected: boolean;
}

const GameWrapper: React.FC<any> = () => {
  const [diceArray, setDiceArray] = useState<iDie[]>([]);
  const [rolls, setRolls] = useState(0);
  const [tenzies, setTenzies] = useState(false);

  const getRandom = () => {
    return Math.ceil(Math.random() * 6);
  };

  const toggleDie = (id: number) => {
    setDiceArray((oldArr) => {
      return oldArr.map((die, index) => {
        return index === id ? { ...die, selected: !die.selected } : die;
      });
    });
  };

  const rollDices = () => {
    const allSelected = diceArray.every((die) => die.selected);
    if (!allSelected) {
      setRolls((oldRolls) => (oldRolls = oldRolls + 1));
    }
  };

  useEffect(() => {
    setDiceArray((oldArr) => {
      const newArr = [];
      if (!oldArr.length) {
        for (let i = 0; i < 10; i++) {
          newArr.push({ value: getRandom(), selected: false });
        }
      } else {
        for (let i = 0; i < 10; i++) {
          if (oldArr[i].selected) {
            newArr.push(oldArr[i]);
          } else {
            newArr.push({ ...oldArr[i], value: getRandom() });
          }
        }
      }
      return newArr;
    });
  }, [rolls]);

  useEffect(() => {
    if (diceArray.length) {
      const allSelected = diceArray.every((die) => die.selected);
      const firstValue = diceArray[0].value;
      const allSameValue = diceArray.every((die) => die.value === firstValue);

      if (allSelected && allSameValue) {
        setTenzies(true);
        alert(`YOU WON WITh ${rolls} ROLLS!!!`);
      }
    }
  }, [diceArray]);

  return (
    <div className="gameWrapper">
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls
      </p>
      <div className="gameWrapper-dieBox">
        {diceArray.map((die: iDie, index: number) => (
          <Die die={die} key={index} toggleDie={() => toggleDie(index)} />
        ))}
      </div>
      <button className="gameWrapper-rollBtn" onClick={rollDices}>
        <h4>Roll</h4>
      </button>
      <p style={{ fontSize: "0.7em" }}>Number of rolls:{rolls}</p>
    </div>
  );
};
export default GameWrapper;

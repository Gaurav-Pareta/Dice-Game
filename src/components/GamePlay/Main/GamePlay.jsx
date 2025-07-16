import "./GamePlay.css"
import Score from "../Score/Score"
import ChooseNumber from "../ChooseNumbers/ChooseNumber"
import RollDice from "../RollDice/RollDice"
import { useState } from "react"

const GamePlay = () => {
  const [currentDice, setCurrentDice] = useState(1)
  const [number, setNumber] = useState()
  const [score, setScore] = useState(0)

  const generateRandomDice = () => {
  if (number === undefined) {
    alert("Please Select a number!");
  } else {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    setCurrentDice(randomNumber);
    updateScore(randomNumber);
    setNumber(undefined);
  }
};

  const updateScore = (randomNumber) => {
    if(number == randomNumber){
      setScore((prev) => prev + number)
    }
    else{
      setScore((prev) => prev - 2)
    }
  }

  return (
    <div>
      <div className="top">
        <div className="score">
          <Score score={score}/>
        </div>
        <div className="numbers">
          <ChooseNumber number={number} setNumber={setNumber} />
        </div>
      </div>
      <div className="rollDice">
        <RollDice currentDice={currentDice} 
        updateScore={updateScore} 
        setCurrentDice={setCurrentDice}
        setNumber={setNumber}
        number={number}
        setScore={setScore}
        generateRandomDice={generateRandomDice}/>
      </div>
      
    </div>
  )
}

export default GamePlay

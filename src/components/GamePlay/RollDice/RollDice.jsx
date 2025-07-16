import "./RollDice.css";
import Rules from "../Rules/Rules";
import { useState } from "react";

const RollDice = ({ currentDice, setScore, generateRandomDice }) => {
  const [showRules, setShowRules] = useState(false);

  const toggleRules = () => {
    setShowRules(!showRules);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div className="diceDiv">
      <div className="dice">
        <img
          src={`dice_${currentDice}.png`}
          onClick={generateRandomDice}
          alt={`Dice showing ${currentDice}`}
        />
      </div>
      <p>Click on dice to roll</p>

      <div className="btns">
        <button onClick={resetScore} className="reset">Reset Score</button>
        <button className="rules" onClick={toggleRules}>
          {showRules ? "Hide Rules" : "Show Rules"}
        </button>
        {showRules && <Rules />}
      </div>
    </div>
  );
};

export default RollDice;

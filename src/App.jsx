import { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame/StartGame'
import GamePlay from './components/GamePlay/Main/GamePlay';

function App() {
  const [gameStarted, setGameStarted] = useState();

  const toggleGame = () =>{
    setGameStarted(!gameStarted);
  }

  return (
    <>
      {gameStarted? <GamePlay/>:<StartGame  
        toggle = {toggleGame}
      /> }
    </>
  )
}

export default App

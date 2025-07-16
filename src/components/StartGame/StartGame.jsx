import './StartGame.css'

const StartGame = ({toggle}) => {
    return (
        <div className='container'>

            <div className='dices'>
                <img src="Dices.png" />
            </div>

            <div className="playGame">
                <h1>Dice Game</h1>
                <button onClick={toggle}>Play Now</button>
            </div>
            
        </div>
    )
}

export default StartGame

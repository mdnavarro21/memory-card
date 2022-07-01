import React, { useState }from "react";
import Scoreboard from './main-components/Scoreboard';
import Gameboard from './main-components/Gameboard';

const Main = () => {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const handleCorrectGuess = () => {
        setCurrentScore(currentScore + 1);
        if (currentScore >= bestScore) {
            setBestScore(currentScore + 1);
        }
    }

    const handleIncorrectGuess = () => {
        if (currentScore > bestScore) {
            setBestScore(currentScore);
        }

        setCurrentScore(0);
    }
    return (
        <main>
            <Scoreboard currentScore = {currentScore} bestScore = {bestScore}/>
            <Gameboard handleCorrectGuess = {handleCorrectGuess} handleIncorrectGuess = {handleIncorrectGuess}/>
            <button onClick={handleCorrectGuess}>Correct Guess</button>
            <button onClick = {handleIncorrectGuess}>Incorrect Guess</button>
        </main>
    )
}

export default Main;
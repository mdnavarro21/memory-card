import React, { useState }from "react";
import Scoreboard from './main-components/Scoreboard';
import Gameboard from './main-components/Gameboard';
import Modal from "./main-components/Modal";
import '../styles/Main.css'
const Main = () => {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [show, setShow] = useState(false);

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
        showModal();
    }

    function showModal(){
        setShow(true);
    };
    
    const hideModal = () => {
        setShow(false);
    };
    return (
        <main>
            <p>Today we test your memory skills of the Champions of the League.</p>
            <p>It's simple. Click on the champion cards to make a guess. Just don't click the same champion or your score resets.</p>
            <p>The goal is to reach the highest possible score: 160.</p>
            <p>CAUTION: Beware of tilt. Dangerously high levels of tilt may occur.<br/> (Imagine sitting in queue for 30 minutes until your client freezes having to restart your PC, requeue again, only to finally get into champ select where you get first pick, enemy picks your counter, and your team proceeds to int and hold you hostage for the rest of the game. Yeah...that level of tilt.)</p>
            <p>Good Luck.</p>
            <Scoreboard currentScore = {currentScore} bestScore = {bestScore}/>
            <Gameboard handleCorrectGuess = {handleCorrectGuess} handleIncorrectGuess = {handleIncorrectGuess}/>
            <Modal show={show} handleClose={ hideModal}></Modal>
        </main>
    )
}

export default Main;
import React from "react";
const Scoreboard = ({currentScore, bestScore}) => {

    return (
        <div id = 'scoreboard'>
            <p>Today we test your memory skills of the Champions of the League.</p>
            <p>It's simple. Click on the champion cards to make a guess. Just don't click the same champion or your score resets.</p>
            <p>The goal is to reach the highest possible score: 160.</p>
            <p>CAUTION: Beware of tilt. Dangerously high levels of tilt may occur.<br/> (Imagine sitting in queue for 30 minutes until your client freezes having to restart your PC, requeue again, only to finally get into champ select where you get first pick, enemy picks your counter, and your team proceeds to int and hold you hostage for the rest of the game. Yeah...that level of tilt.)</p>
            <p>Good Luck.</p>
           <div>Current Score: {currentScore}</div>
           <div>Best Score: {bestScore}</div>
        </div>
    )
}

export default Scoreboard;
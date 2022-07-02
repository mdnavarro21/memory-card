import React, { useState, useEffect }from "react";
import Card from './Card';

const Gameboard = ({handleCorrectGuess, handleIncorrectGuess}) => {
    const [cardDeck, setCardDeck] = useState([0,1,2,3,4,5,6,7,8,9]);
    const shuffleCards = (array) => {
        let currentIndex = array.length,  randomIndex;
        
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
        
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        
        return array;
    }
    useEffect(() => {
        setCardDeck(prevDeck => { return shuffleCards([...prevDeck])})
    }, [])



    const handleClick = () => {
        const newArray = shuffleCards([...cardDeck])
        setCardDeck(shuffleCards(newArray));
    }

    const createCards = () => {
        return cardDeck.map((card, index) => {
            return <Card key = {index} cardInfo = {card} handleClick = {handleClick} />
        })
    }

    return (
        <div id = 'gameboard'>
            {   /*
                cardDeck.map((card, index) => {
                    return <Card key = {index}cardInfo = {card} handleClick = {handleClick} correctGuess = {handleCorrectGuess} incorrectGuess = {handleIncorrectGuess}/>
                })*/
            }
            <div>{createCards()}</div>

        </div>
    )
}

export default Gameboard;
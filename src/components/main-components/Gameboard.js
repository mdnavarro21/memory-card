import React, { useState, useEffect }from "react";
import '../../styles/Gameboard.css'
import Card from './Card';
import uniqid from 'uniqid';

const Gameboard = ({handleCorrectGuess, handleIncorrectGuess}) => {

    //initialize deck of champion cards using useState
    const [cardDeck, setCardDeck] = useState((() => {
        function importAll(r) {
            return r.keys().map(r);
          }
          
        const images = importAll(require.context('../../assets', false, /\.(png|jpe?g|svg)$/));
        const newDeck = [];
        for (let image of images) {
            const card = {
                url: image,
                champion_name: image.match(/[A-Z][a-zA-Z]+/),
                id: uniqid(),
            }
            newDeck.push(card);
        }
        return shuffleCards(newDeck);
    })());
    const [items, setItems] = useState([]);
    const [guesses, setGuesses] = useState([]);

    function shuffleCards(array) {
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
        const handleClick = (e) => {
            const champ = e.currentTarget.id
            if (guesses.includes(champ)) {
                setGuesses([]);
                handleIncorrectGuess();
            }
            else {
                handleCorrectGuess();
                setGuesses(prevGuesses => [...prevGuesses, champ])
            }
            setCardDeck(shuffleCards([...cardDeck]))
        }    

        const newArray = cardDeck.map((card) => {
            return <Card key = {card.id} cardInfo = {card} handleClick = {handleClick} />
        });

        setItems(newArray);
    }, [cardDeck, guesses, handleIncorrectGuess, handleCorrectGuess])

    return (
        <div id = 'gameboard'>
            {items}
        </div>
    )
}

export default Gameboard;
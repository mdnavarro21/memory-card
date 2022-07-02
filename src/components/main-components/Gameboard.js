import React, { useState, useEffect }from "react";
import '../../styles/Gameboard.css'
import Card from './Card';

const Gameboard = ({handleCorrectGuess, handleIncorrectGuess}) => {
    const [cardDeck, setCardDeck] = useState((() => {
        function importAll(r) {
            return r.keys().map(r);
          }
          
        const images = importAll(require.context('../../assets', false, /\.(png|jpe?g|svg)$/));
        console.log(images);
        const newDeck = [];
        for (let image of images) {
            const card = {
                url: image,
                champion_name: image.match(/[A-Z].+_/),
            }
            newDeck.push(card);
        }
        return newDeck;
    })());
    const [items, setItems] = useState([]);

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
        const handleClick = (e) => {
            const newArray = shuffleCards([...cardDeck])
            setCardDeck(shuffleCards(newArray));
        }

        const newArray = cardDeck.map((card, index) => {
            return <Card key = {index} cardInfo = {card} handleClick = {handleClick} />
        });

        setItems(newArray);
    }, [cardDeck])

    return (
        <div id = 'gameboard'>
            {items}
        </div>
    )
}

export default Gameboard;
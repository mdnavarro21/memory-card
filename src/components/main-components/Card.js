import React from "react";

const Card = ({cardInfo, handleClick}) => {
    
    return (
        <div onClick = { handleClick } className="card" id = {(cardInfo.champion_name.toString().toLowerCase())}>
            <img src = {cardInfo.url} alt = ''/>
            <h2>{cardInfo.champion_name}</h2>
        </div>
    )
}

export default Card
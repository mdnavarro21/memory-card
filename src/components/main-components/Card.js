import React from "react";

const Card = ({cardInfo, handleClick}) => {

    /*useEffect(() => {
        const onClick = handleClick;
        document.addEventListener('click', onClick)

        return () => {document.removeEventListener('click', onClick)}
    })*/
    
    return (
        <div onClick = { handleClick }className="card">
            <img src = {cardInfo.url} alt = ''/>
            <h2>{cardInfo.champion_name}</h2>
        </div>
    )
}

export default Card
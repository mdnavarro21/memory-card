import React, { useEffect } from "react";

const Card = ({cardInfo, handleClick}) => {

    useEffect(() => {
        const onClick = handleClick;
        document.addEventListener('click', onClick)

        return () => {document.removeEventListener('click', handleClick)}
    })
    return (
        <div className="card">{cardInfo}</div>
    )
}

export default Card
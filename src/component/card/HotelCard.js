import React from 'react';

function HotelCard(cardClass,image, name, description) {
    return (
        <div className = {cardClass}>
            <img src = {image} />
            <h3>{name}</h3>
            <p>{description}</p>
            <button>link</button>  
        </div>
    );
}

export default HotelCard;




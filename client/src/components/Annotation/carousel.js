import React from 'react';

const Carousel = (props) => {
    return(
        <div className="carousel">
            <img src={props.image} alt="#"/>
        </div>
    );
    };

export default Carousel;

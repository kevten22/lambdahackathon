import React from 'react';

const Carousel = (props) => {
    const url = "http://localhost:9000/images/"
    return(
        <div className="carousel">
            <img src={`${url}${props.image}`} alt="#"/>
        </div>
    );
    };

export default Carousel;

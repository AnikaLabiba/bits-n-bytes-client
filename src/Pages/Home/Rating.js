import React from 'react';
// import "./styles.css";
import ReactStars from "react-rating-stars-component";

const firstExample = {
    size: 30,
    value: 2.5,
    edit: true,
    onChange: newValue => {
        console.log(`Example 2: new value is ${newValue}`);
    }
};

const Rating = () => {

    return (


        <div>
            <h2>Rating from state:</h2>
            <ReactStars {...firstExample} />
        </div>
    );
};

export default Rating;
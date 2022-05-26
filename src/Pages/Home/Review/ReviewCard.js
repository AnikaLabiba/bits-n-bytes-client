import React from 'react';
import ReactStars from 'react-rating-stars-component';

const ReviewCard = ({ review }) => {
    const { user, feedback, ratingNUm } = review
    const rating = {
        size: 30,
        count: 5,
        value: ratingNUm,
        edit: false,
        onChange: newValue => {
            // console.log(`Example 2: new value is ${newValue}`);
        }
    };


    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="p-5 flex items-center justify-center">
                <div className="avatar placeholder mr-4">
                    <div className="bg-accent text-white rounded-full w-16">
                        <span className="text-xl">{user}</span>
                    </div>
                </div>
                <div>
                    <p>{feedback}</p>
                    <p className='mx-auto w-36'><ReactStars {...rating} /></p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
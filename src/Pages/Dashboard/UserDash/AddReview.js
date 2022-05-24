import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ReactStars from "react-rating-stars-component";
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const [rating, setRating] = useState(0)
    const firstExample = {
        size: 30,
        value: 0,
        edit: true,
        onChange: newValue => {
            setRating(newValue)
            // console.log(`Example 2: new value is ${newValue}`);
        }
    };

    const getFeedback = event => {
        event.preventDefault()
        const review = {
            user: user.displayName,
            email: user.email,
            feedback: event.target.feedback.value,
            ratingNUm: rating
        }
        console.log(review);

        if (rating) {
            fetch('http://localhost:5000/review', {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(inserted => {
                    if (inserted.insertedId) {
                        toast.success('Review added successfully')
                    }
                    else {
                        toast.error('Failed to add the review')
                    }
                })
        }
        else {
            toast.warn('Please put the raing value')
        }
    }

    return (
        <div>
            <h2 className='text-3xl mb-8'>Add your Feedback</h2>



            <div className='flex items-center text-lg justify-center mr-5 '>
                <h3>Give Rating</h3>
                <ReactStars {...firstExample} />
            </div>

            <form onSubmit={getFeedback}>
                <input type="text" name='feedback' placeholder="Feedback" class="input input-bordered input-lg w-full max-w-xs" />
                <input className='btn btn-xs mt-4' type="submit" value="Add Review" />
            </form>

        </div>
    );
};

export default AddReview;
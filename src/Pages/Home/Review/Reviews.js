import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ReviewCard from './ReviewCard';


const Reviews = () => {
    // const { data: reviews, isLoading, refetch } = useQuery('review', () =>
    //     fetch('http://localhost:5000/review', {
    //         method: 'GET',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json()));
    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    const [reviews, setReviews] = useState([])
    useEffect(() => {

        fetch(`http://localhost:5000/review`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    return (
        <div className='mx-12 my-14'>
            <h2 className='text-3xl text-center font-bold mb-3'>What Our Client Say</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviews?.map(review =>
                        <ReviewCard
                            review={review}
                            key={review._id}
                        ></ReviewCard>)
                }
            </div>
        </div>
    );

};

export default Reviews;
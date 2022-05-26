import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0dpnFFVLKLPZTTLGHZ5KTMfmCE37MvFLejXBHRw7nuFQHtUcPhSRLfQqJLKUPqbSEWvot1s8f05FWuvu89lSle00BsaxqyMf');

const Payment = () => {
    const { orderId } = useParams()
    const url = `https://safe-escarpment-45724.herokuapp.com/order/${orderId}`
    const { data: order, isLoading } = useQuery(['order', orderId], () =>
        fetch(url, {
            method: 'get',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl font-bold">Please pay for <span className='text-accent'>{order.part}</span></h2>
            {/* <p>Your order on <span className='text-orange-700'>{order.date}</span> in {order.slot}</p> */}
            <p className='text-lg'>Please ${order.price}</p>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
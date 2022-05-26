import React from 'react';

const CustomerSupport = () => {
    return (
        <div className='m-20'>
            <h2 className='text-primary text-center text-4xl font-bold'>Our Customer Supports</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 mx-auto my-10'>
                <p className='text-2xl text-blue-300 font-bold'>Refund Policy <progress className="progress progress-primary w-56" value="10" max="100"></progress></p>
                <p className='text-2xl text-blue-300  font-bold'>Return Policy  <progress className="progress progress-primary w-56" value="40" max="100"></progress></p>
                <p className='text-2xl text-blue-300  font-bold'>Delivery Process <progress className="progress progress-primary w-56" value="70" max="100"></progress></p>
                <p className='text-2xl text-blue-300  font-bold'>Customer Satisfaction  <progress className="progress progress-primary w-56" value="100" max="100"></progress></p>
            </div>
        </div>
    );
};

export default CustomerSupport;

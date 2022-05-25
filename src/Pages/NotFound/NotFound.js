import React from 'react';
import notFound from '../../images/notFound.png'

const NotFound = () => {
    return (
        <div className='w-full flex justify-center lg:h-screen h-full md:h-full mb-56'>
            <img width='w-full' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;
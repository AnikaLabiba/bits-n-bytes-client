import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data.reverse()))
    }, [])
    return (
        <div className='mx-12 my-20'>
            <h2 className='text-4xl text-center font-bold'>Our Featured Products</h2>
            <div className='grid grid-cols-1 sm:w-full md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                {
                    parts.reverse().map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;
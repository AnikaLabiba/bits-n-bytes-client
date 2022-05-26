import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, img, name, description, price, minOrderQuantity, availableQuantity } = part
    const navigate = useNavigate()
    const handleNavigate = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div className="card bg-base-100 shadow-xl max-h-fit">
            <h2 className="text-center text-lg font-bold my-3">{name}</h2>
            <figure className='h-28 mt-4'>
                <img width={'150px'} src={img} alt={name} />
            </figure>

            <div className="card-body mt-14">
                <div className='lg:flex'>
                    <p className="badge badge-accent">${price}</p>
                    <p className=" badge badge-info mx-2">Min order: {minOrderQuantity}</p>
                    <p className="badge badge-secondary">In stock {availableQuantity}</p>
                </div>
                <p>{description.slice(0, 50)}</p>
                <button onClick={() => handleNavigate(_id)} className="btn btn-accent w-full">Order Now</button>
            </div>

        </div>
    );
};

export default Part;
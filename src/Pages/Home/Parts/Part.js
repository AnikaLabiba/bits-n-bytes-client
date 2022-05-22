import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, img, name, description, price, minOrderQuantity, availableQuantity } = part
    const navigate = useNavigate()
    const handleNavigate = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div class="card bg-base-100 shadow-xl max-h-fit">
            <h2 class="text-center text-lg font-bold my-3">{name}</h2>
            <figure className='h-28 mt-4'>
                <img width={'150px'} src={img} alt={name} />
            </figure>

            <div class="card-body mt-14">
                <div className='lg:flex'>
                    <p class="badge badge-accent">${price}</p>
                    <p class=" badge badge-primary mx-2">Min order: {minOrderQuantity}</p>
                    <p class="badge badge-secondary">In stock {availableQuantity}</p>
                </div>
                <p>{description.slice(0, 50)}</p>
                <button onClick={() => handleNavigate(_id)} class="btn btn-primary w-full">Order Now</button>
            </div>

        </div>
    );
};

export default Part;
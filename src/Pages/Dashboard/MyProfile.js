import React from 'react';

const MyProfile = () => {
    return (
        <div>
            <h2 className='text-3xl text-accent font-bold mt-3'>Profile setting</h2>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
import React from 'react';
import query from '../../images/query.png'

const Query = () => {
    return (
        <div className='my-20'>
            <h2 className='text-primary text-center text-4xl font-bold'>Put A Query</h2>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:mx-32">
                <img width={'500px'} src={query} alt="" />
                <div class="card w-full mx-auto bg-base-100 shadow-xl ">
                    <div class="card-body">

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Your Email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Query</span>
                            </label>
                            <input type="text" placeholder="Your Query" class="input input-bordered" />

                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Ask</button>
                        </div>

                    </div>



                </div>
            </div>
        </div>

    );
};

export default Query;
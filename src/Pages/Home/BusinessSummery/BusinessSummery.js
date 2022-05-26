import React from 'react';
import { GoProject } from 'react-icons/go';
import { FaUsers } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaFileInvoiceDollar } from 'react-icons/fa';

const BusinessSummery = () => {
    return (
        <div>
            <h3 className='text-center  font-bold'>Who Are We</h3>
            <h2 className='text-center text-primary text-4xl font-bold'>An Ultimate Brand In Market For 10 Years</h2>
            <div className="lg:flex md:flex">

                <div className='stats shadow lg:w-full my-20 mx-8 stats-vertical lg:stats-horizontal md:stats-horizontal'>
                    <div className="stat p-10">
                        <div className="stat-figure text-purple-300 text-5xl mr-8">
                            < GoProject />
                        </div>
                        <div className="stat-title">We have</div>
                        <div className="stat-value text-purple-300">500+</div>
                        <div className="stat-desc">Finished Projects</div>
                    </div>


                    <div className="stat p-10">
                        <div className="stat-figure text-secondary text-6xl mr-8">
                            <FaUsers />
                        </div>
                        <div className="stat-title">We have</div>
                        <div className="stat-value text-secondary">700+</div>
                        <div className="stat-desc">Happy Clients</div>
                    </div>

                    <div className="stat p-10">
                        <div className="stat-figure text-accent text-5xl mr-8">
                            <FaThumbsUp />
                        </div>
                        <div className="stat-title">We have earned</div>
                        <div className="stat-value text-accent">10K+</div>
                        <div className="stat-desc">Positive Feedbacks</div>
                    </div>
                    <div className="stat p-10">
                        <div className="stat-figure text-green-200 text-5xl mr-8">
                            <FaFileInvoiceDollar />
                        </div>
                        <div className="stat-title">Every Year</div>
                        <div className="stat-value text-green-200">1M</div>
                        <div className="stat-desc">Annual Revenue</div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default BusinessSummery;

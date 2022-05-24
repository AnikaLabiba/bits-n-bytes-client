import React from 'react';
import { GoProject } from 'react-icons/go';
import { FaUsers } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaFileInvoiceDollar } from 'react-icons/fa';

const BusinessSummery = () => {
    return (
        <div>
            <h3 className='text-center font-bold'>Who Are We</h3>
            <h2 className='text-center text-4xl font-bold'>An Ultimate Brand In Market For 10 Years</h2>
            <div class="lg:flex md:flex">

                <div className='stats shadow lg:w-full my-20 mx-8 stats-vertical lg:stats-horizontal md:stats-horizontal'>
                    <div class="stat p-10">
                        <div class="stat-figure text-purple-300 text-5xl mr-8">
                            < GoProject />
                        </div>
                        <div class="stat-title">We have</div>
                        <div class="stat-value text-purple-300">500+</div>
                        <div class="stat-desc">Finished Projects</div>
                    </div>


                    <div class="stat p-10">
                        <div class="stat-figure text-secondary text-6xl mr-8">
                            <FaUsers />
                        </div>
                        <div class="stat-title">We have</div>
                        <div class="stat-value text-secondary">700+</div>
                        <div class="stat-desc">Happy Clients</div>
                    </div>

                    <div class="stat p-10">
                        <div class="stat-figure text-accent text-5xl mr-8">
                            <FaThumbsUp />
                        </div>
                        <div class="stat-title">We have earned</div>
                        <div class="stat-value text-accent">10K+</div>
                        <div class="stat-desc">Positive Feedbacks</div>
                    </div>
                    <div class="stat p-10">
                        <div class="stat-figure text-green-200 text-5xl mr-8">
                            <FaFileInvoiceDollar />
                        </div>
                        <div class="stat-title">Every Year</div>
                        <div class="stat-value text-green-200">1M</div>
                        <div class="stat-desc">Annual Revenue</div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default BusinessSummery;

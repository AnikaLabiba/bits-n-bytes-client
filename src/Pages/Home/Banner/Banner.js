import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div class="hero min-h-screen home">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                    <p class="mb-5 text-xl">We are here to serve you the authentic parts in best deal. We believe in your satisfaction. </p>
                    <Link to='/login'><button class="btn btn-primary">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import Parts from './Parts/Parts';
import Reviews from './Review/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;
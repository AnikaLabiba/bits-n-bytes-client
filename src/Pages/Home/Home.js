import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import CustomerSupport from './CustomerSupport';
import Parts from './Parts/Parts';
import Query from './Query';
import Reviews from './Review/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <CustomerSupport />
            <Query></Query>
        </div>
    );
};

export default Home;
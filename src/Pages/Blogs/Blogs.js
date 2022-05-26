import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-28 mb-40'>
            <div className='mb-5 mt-3'>
                <h2 className='text-2xl text-center'>What are the different ways to manage a state in a React application?</h2>
                <p>There are 4 different types of state to manage in React apps, they are Local state, Global state, Server state,URL state. Local state is the data that we manage in one or another component. Global is data we manage across multiple components. Server state refer the Data that comes from an external server. URL state data that exists on our URLs, including the pathname and query parameters.</p>
            </div>
            <div className='mb-5'>
                <h2 className='text-2xl text-center'>How does prototypical inheritance work?</h2>
                <p>Prototypical inheritance is ES6 feature. It allows us to share copy the property and methods of a javascript object to another object. For example we have a object 'user' we need to make another object 'guest' we can use the properties of  object 'user'.</p>
            </div>
            <div className='mb-5'>
                <h2 className='text-2xl text-center'> Why you do not set the state directly in React</h2>
                <p>We can not set the state directly in React beacuse if we update it directly, it just replace the update that we made. Again if we set directly the state, it does not change this.state immediately rather it creates a pending state and for that reason the start returns the present value. So that we do not habe any control of the state across all components.</p>
            </div>
            <div className='mb-5'>
                <h2 className='text-2xl text-center'> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>For searching by name we can use the filter in the array. It is a ES6 feature, it takes some specific condition and finds the elements in the array that fullfill the condition  and also retuns an array. </p>
            </div>
            <div className='mb-5'>
                <h2 className='text-2xl text-center'> What is a unit test? Why should write unit tests?</h2>
                <p>Unit test refers that checking the application after developing. It is auutometed test run by the developers to check the design and behavior of the application. </p>
                <p>Unit testing is important because by that we can ensure that the application meets the quality and fulllfills the user requirements. It is needed for the reliable engineering environment where quality is paramount.</p>
            </div>
        </div>
    );
};

export default Blogs;
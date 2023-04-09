import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const tShirts = useLoaderData();
    console.log(tShirts);

    return (
        <div className='home-container'>
            <div className='t-shirt-container'>
                {tShirts.map()}
            </div>
            <div className='cart-container'>
            </div>
        </div>
    );
};

export default Home;
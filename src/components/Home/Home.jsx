import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const tShirts = useLoaderData();

    return (
        <div className='home-container'>
            <div className='t-shirt-container'>
                {tShirts.map(ts => <TShirt key={ts._id} tShirt={ts} />)}
            </div>
            <div className='cart-container'>
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Home;
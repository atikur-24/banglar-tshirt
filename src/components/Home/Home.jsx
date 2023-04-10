import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handlerAddToCart = tShirt => {
        const newCart = [...cart, tShirt];
        setCart(newCart);
    }

    const handlerRemoveFromCart = id => {
        console.log(id);
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }
    return (
        <div className='home-container'>
            <div className='t-shirt-container'>
                {tShirts.map(ts => <TShirt key={ts._id} tShirt={ts} handlerAddToCart={handlerAddToCart} />)}
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handlerRemoveFromCart={handlerRemoveFromCart} />
            </div>
        </div>
    );
};

export default Home;
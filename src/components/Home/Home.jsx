import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import { toast } from 'react-toastify';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handlerAddToCart = tShirt => {
        const exist = cart.find(ts => ts._id === tShirt._id);

        if(exist) {
            toast.error("You have already buy this", {theme: "colored"})
        }
        else {
            const newCart = [...cart, tShirt];
            setCart(newCart);
        }
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
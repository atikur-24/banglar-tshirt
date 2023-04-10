import React from 'react';
import './TShirt.css'

const TShirt = ({ tShirt, handlerAddToCart }) => {
    const { gender, name, picture, price } = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="t-shirt" />
            <div className='ts-info'>
                <h6 id='ts-name'>{name}</h6>
                <p>For : {gender ? gender : 'Fun'}</p>
                <p>Price: <span className='price'>${price}</span></p>
                <button onClick={ () => handlerAddToCart(tShirt) } className='buy-btn'>BUY NOW</button>
            </div>
        </div>
    );
};

export default TShirt;
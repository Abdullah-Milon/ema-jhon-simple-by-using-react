import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product)
    const { img, name, seller, ratings, quantity, price } = props.product
    return (
        <div className='products'>
            <img className='img' src={img} alt="" />
            <div className='products-info'>
                <p>{name}</p>
                <p><small>Price: {price}</small></p>
                <p>Manufacturur: {seller}</p>
                <p>Ratings: {ratings} star</p>
            </div>
            <button className='cart-btn'>Add to cart</button>
        </div>
    );
};
export default Product;
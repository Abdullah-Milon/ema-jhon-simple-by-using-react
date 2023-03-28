import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    // console.log(props)
    const { img, name, seller, ratings, quantity, price } = props.product;
    /* ata direct use korte parbo na dekhe ato kahini kora lagce shop.jsx a declare */
    const handleToCart= props.handleToCart

    /* রিয়েক্ট হচ্ছে unidrectional অর্থাৎ উপর থেকে নিচে যাবে কিন্তু 
    নিচ থেকে ওপরে যাবে না। product এটা কিন্তু নিচে আছে, তাই নিচ থেকে উপরে পাঠানো যাবে না 
    তবে চালাকি করে atake shop.jsx উপরে ব্যবহার করা যাবে  
    const handleToCart = (product) => {
        console.log(product)
    }*/

    return (
        <div className='products'>
            <img className='img' src={img} alt="" />
            <div className='products-info'>
                <p>{name}</p>
                <p><small>Price:$ {price}</small></p>
                <p>Manufacturur: {seller}</p>
                <p>Ratings: {ratings} star</p>
            </div>

            {/* <button onClick={handleToCart()} className='cart-btn'>Add to cart</button> */}
            {/* এটা মানে ফাংশন কে কল করা বোঝাচ্ছে,
             যখন handleToCart প্রসেসিং করবে তখন অটো কল হয়ে যাবে  তাই কনসোলে দেখা যায় 
            যে সবগুলো অটো কল হয়ে  আছে। 
            কিন্তু আমি তো এখন কল করতে চাচ্ছি না যখন ক্লিক করব তখন কল হবে 
            তাই এই সমস্যা দূরীকরণে handleToCart কে wrap করতে হবে*/}

            <button onClick={() => handleToCart(props.product)} className='cart-btn'>
                Add to cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};
export default Product;
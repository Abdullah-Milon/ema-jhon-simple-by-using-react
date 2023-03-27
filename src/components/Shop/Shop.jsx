import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    /* data load র ক্ষেত্রে এটা একটা সাইড ইফেক্ট কারণ 
    এটা ওই প্রজেক্ট থেকে লোড হচ্ছে না, আউটসাইড থেকে লোড হচ্ছে 
    এ কারণে এটাকে handle করার জন্য ইউজ ইফেক্ট ব্যবহার করতে হবে।
    
     useEffect এ empty array দেয়ার মূল কারণ 
     যখন এই component টা  data load হবে তখন দেখাবে 
    */
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    // products.map(product => console.log(product))
                    products.map(product => <Product
                        key={product.id}
                        // name= {product} ata delew cholbe tobe map er sathe mil 
                        // rekhe product e dilam
                        product={product}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <div className='order-info'>
                    <h4>Order Summary</h4>
                    <h5>Selected Items:</h5>
                    <h5>Total Price:</h5>
                    <h5>Total Shipping Charge:</h5>
                    <h5>Tax:</h5>
                    <h4>Grand Total:</h4>
                    <div className='order-btn'>
                        <button>Clear Cart</button>
                        <button>Remove Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
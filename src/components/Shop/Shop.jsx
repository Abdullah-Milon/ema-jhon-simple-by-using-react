import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    /* state declare করার মূল কারণ হচ্ছে একজন মানুষ একটা একটা করে 
    product কিনতেও পারে আবার নাও কিনতে পারে অর্থাৎ যদি কিনে 
    তাহলে এটা পরিবর্তন যোগ্য বা static  আর 
    static condition এ  state declare করা আবশ্যক । 

    যেহেতু কেউ শপিং করতে চাইলে একটা একটা করে প্রোডাক্ট এড করবে সেহেতু 
    এক জায়গায়  কিছু প্রোডাক্টের কালেকশন হবে আর এখানে কালেকশন বলতে 
    array কে বুঝানো হচ্ছে । তাই useState = empty array অর্থাৎ useState([])
 */

        const [cart, setCart] = useState([])


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
    }, []);

    const handleToCart = (product) =>{
        // console.log(product)
        const newCart = [...cart, product ];
        setCart(newCart)
    }

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
                        handleToCart = {handleToCart}
                    ></Product>)
                }
            </div>

            <div  >
              <Cart cart={cart}></Cart>
             
            </div>
        </div>
    );
};

export default Shop;
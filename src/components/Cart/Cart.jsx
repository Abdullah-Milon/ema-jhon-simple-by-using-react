import React from 'react';
import './Cart.css';


// const Cart = (props) => {
const Cart = ({ cart }) => {
    // const cart = props.cart;//option 1
    // const {cart} = props;//option 2

    console.log(cart);
    /* এখানে যখন product cart এ যোগ করবে তখন total price পাওয়ার জন্য
      for of loop চালাইলাম loop চালিয়ে প্রত্যেকটা product price কে পাবে 
    এবং total হিসেবে আগের total মান এর সাথে যোগ হবে
     */

   /*  let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    //shipping
    let shippingCost = 0;
    for(const product of cart){
        shippingCost = shippingCost + product.shipping;
    } */
 
    // total ও shipping এক সাথে লিখলে
    let totalPrice = 0;
    let shippingCost = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        shippingCost = shippingCost + product.shipping;
    }

    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + shippingCost + tax;

    return (
        <div className='cart-container'>
            <div className='order-info'>
                <h4>Order Summary: </h4>
                <h5>Selected Items:{cart.length}</h5>
                <h5>Total Price:${totalPrice}</h5>
                <h5>Total Shipping Charge:${shippingCost.toFixed(2)}</h5>
                <h5>Tax:${tax.toFixed(2)}</h5>
                <h4>Grand Total:${grandTotal.toFixed(2)}</h4>
                <div className='order-btn'>
                    <button>Clear Cart</button>
                    <button>Remove Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
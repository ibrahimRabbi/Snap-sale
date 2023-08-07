import React, { useEffect, useState } from 'react';
import './cart.css'
import Card from './card';
const Cart = () => {

    const [cartData, setCartData] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:5000/cart")
            .then(res => res.json())
        .then(res=>setCartData(res))
    }, [])
    
    return (
        <section className='cart my-20 w-[90%] mx-auto grid gap-10 '>
            <div className='space-y-3'>
                {
                    cartData.map(v => <Card key={v._id} data={v}/> ) 
                }
            </div>
            <div>hello</div>
        </section>
    );
};

export default Cart;
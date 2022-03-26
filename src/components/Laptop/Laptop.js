import React, { useEffect, useState } from 'react';
import LaptopDetails from '../LaptopDetails/LaptopDetails';
import ProductCart from '../ProductCart/ProductCart';
import './Laptop.css'

const Laptop = () => {
    const [laptops, setLaptops] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setLaptops(data))
    }, []);
    
    const handleClick = (laptop) =>{
        const newCart = [...cart, laptop];
        setCart(newCart)
    }
  
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    laptops.map(laptop => <LaptopDetails key={laptop.id} laptop={laptop} handleClick={handleClick}></LaptopDetails>)
                }
            </div>
            <div className="cart-container">
                <h3>Shopping Cart: {cart.length}</h3>
                <ProductCart cart={cart}></ProductCart>
            </div>
        </div>
    );
};

export default Laptop;
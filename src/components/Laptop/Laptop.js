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
 
    const handleAddItems = (laptop) =>{
        const newCart = [...cart, laptop];
        setCart(newCart)
    }
    
    const handleRemove = (laptop) =>{
       const newCart = cart.filter((c) => c.laptop !== laptop);
       setCart(newCart);
    }


  
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    laptops.map(laptop => <LaptopDetails key={laptop.id} laptop={laptop} handleAddItems={handleAddItems}></LaptopDetails>)
                }
            </div>
            
            <div className="cart-container">
                <h4>Selceted Product:</h4>
                <ProductCart cart={cart} key={cart.id} handleRemove={handleRemove}></ProductCart>
            </div>
        </div>
    );
};

export default Laptop;
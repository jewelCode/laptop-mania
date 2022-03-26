import React, { useEffect, useState } from 'react';
import LaptopDetails from '../LaptopDetails/LaptopDetails';
import ProductCart from '../ProductCart/ProductCart';
import './Laptop.css'

const Laptop = () => {
   
    const [laptops, setLaptops] = useState([]);
    const [cart, setCart] = useState([]);
    const [random, setRandom] =useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setLaptops(data))
    }, []);
 
    const handleAddItems = (laptop) =>{
        const newCart = [...cart, laptop];
        setCart(newCart)
    }

    const handleRandomItem = () =>{
        const randomNumber = cart;
        const randomCart = randomNumber[Math.floor(randomNumber.length * Math.random())];
        const newRandom = [randomCart]
        setRandom(newRandom)
    }
    
    const handleRemove = (laptop) =>{
       const newCart = cart.filter((c) => c.laptop !== laptop);
       setCart(newCart);
    }
    
  
    return (
        <div className="shop-container row">
            <div className="products-container">
                {
                    laptops.map(laptop => <LaptopDetails key={laptop.id} laptop={laptop} handleAddItems={handleAddItems}></LaptopDetails>)
                }
            </div>
            
            <div className="cart-container">
                <h3>Product Cart</h3>
                {
                    random.map((ran)=> <h6>Selected Product:{ran.name}</h6>)
                }
                <ProductCart cart={cart} key={cart.id} handleRemove={handleRemove}></ProductCart>
                <button className="btn btn-warning me-2" onClick={handleRandomItem}>Choose 1 For Me</button>
            </div>
        </div>
    );
};

export default Laptop;
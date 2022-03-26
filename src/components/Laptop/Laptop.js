import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import LaptopDetails from '../LaptopDetails/LaptopDetails';
import ProductCart from '../ProductCart/ProductCart';


const Laptop = () => {
   
    const [laptops, setLaptops] = useState([]);
    const [cart, setCart] = useState([]);
    const [randomItem, setRandomItem] =useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setLaptops(data))
    }, []);
 
    const handleAddItems = (laptop) =>{
        const newCart = [...cart, laptop];
        if(newCart.length > 4){
            alert('you cannot add more than four items in the cart')
        }
        setCart(newCart)
    }

    const handleRandomItem = () =>{
        const randomNumber = cart;
        const randomCart = randomNumber[Math.floor(randomNumber.length * Math.random())];
        const newRandomItem = [randomCart]
        setRandomItem(newRandomItem)
    }
    
    const handleRemoveItem = (laptop) =>{
       const newCart = cart.filter((c) => c.laptop !== laptop);
       setCart(newCart);
    }
    
  
    return (
        <div className="row mt-5">
                    
                        <div className="col-md-9 col-sm-12">
                                <div className="row container">
                                    {
                                        laptops.map(laptop => <LaptopDetails key={laptop.id} laptop={laptop} handleAddItems={handleAddItems}></LaptopDetails>)
                                    }
                                </div>
                        </div>
                        <div className="col-md-3 col-sm-12 mr-2">
                                    <h3>Product Cart:</h3>
                                    {
                                        randomItem.map((random)=> <h5>Selected Product: {random.name}</h5>)
                                    }
                                    <ProductCart cart={cart} key={cart.id} handleRemoveItem={handleRemoveItem}></ProductCart>
                                    <br />
                                <Button className="btn btn-warning me-2" onClick={handleRandomItem}>Choose One For Me</Button>   
                        </div>
            </div>
    );
};

export default Laptop;
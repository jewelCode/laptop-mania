import React from 'react';
import { Button } from 'react-bootstrap';
import './ProductCart.css';



const ProductCart = ({cart, handleRemoveItem}) => {
    return (
        <div>
            {
                cart.map((item)=>
                <div key={item.id}>
                        <p>
                            {item.name}
                        </p>
                        
                </div>
                )

            }
    
            <Button className="btn btn-warning" onClick={()=>handleRemoveItem(cart.laptop)}>Choose Again</Button>
        </div>
    );
};

export default ProductCart;
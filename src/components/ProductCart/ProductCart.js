import React from 'react';
import './ProductCart.css';



const ProductCart = ({cart, handleRemove}) => {
    
    return (
        <div>
            {
                cart.map((item)=>
                <div key={item.id}>
                        <p>
                            {item.name}
                        </p>
                </div>)
            }

            <button className="btn btn-warning me-2">Choose 1 For Me</button>
            <button className="btn btn-warning" onClick={()=>handleRemove(cart.laptop)}>Choose Again</button>
        </div>
    );
};

export default ProductCart;
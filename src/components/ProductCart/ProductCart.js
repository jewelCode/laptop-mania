import React from 'react';
import './ProductCart.css';



const ProductCart = ({cart}) => {

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
        </div>
    );
};

export default ProductCart;
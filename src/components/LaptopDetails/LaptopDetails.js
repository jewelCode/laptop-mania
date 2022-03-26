import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './LaptopDetails.css'
const LaptopDetails = ({laptop, handleAddItems}) => {
    const {id, img, name, price} = laptop;
  
    return (
        <div>
            <div className="product text-center">
            <img src={img} alt="" />
            <div className="product-info">
                <p>Product Id: {id}</p>
                <h6>Product Name: {name}</h6>
                <p>Product Price: $ {price}</p>
            </div>
            <button onClick={() => handleAddItems(laptop)} className="btn btn-warning text-dark mt-2"> 
                Add To Cart 
             <FontAwesomeIcon className="mx-2" icon={faCartPlus} />
            </button>
        </div>
        </div>
    );
};

export default LaptopDetails;
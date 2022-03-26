import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Button, Card } from 'react-bootstrap';
// import './LaptopDetails.css'
const LaptopDetails = ({laptop, handleAddItems}) => {
    const {id, img, name, price} = laptop;
  
    return (
                    <div className="col-md-4 gy-4">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <h6>Product Id:{id}</h6>
                                <Card.Title>Product Name: {name}</Card.Title>
                                <Card.Text>Product Price: {price}</Card.Text>
                                <Button variant="primary" onClick={() => handleAddItems(laptop)} className="btn btn-warning text-dark mt-2">Add To Cart
                                <FontAwesomeIcon className="mx-2" icon={faCartPlus} />
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
    );
};

export default LaptopDetails;
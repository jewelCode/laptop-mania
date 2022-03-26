import React from 'react';
import './NewsLetter.css'


const NewsLetter = () => {
    return (
        <div className="container">
            <h1 className="text-center">How React Works?</h1>
            <p>React is a modern javascript framework for developing user interfaces. React creates a Virtual DOM memory connect with nodes like a tree. React is a component based javascript framework helps to make efficient use. React makes easier to share data from one component to another component. React works with function and Integrate HTML elements and Javascript.
            </p>
            <h1 className="text-center">What is the difference between props vs state?</h1>
            <p>
                props is used to transfer data from one component to another component on the other hand state is use to hold data from user interaction. props is used for destructure elements from array of objects. on the other hand state is used for holds all the data for props.
                props can read data from parent components on the other hand state cannot read data from child components. props components can reuse and state cannot reuse.

            </p>
        </div>
    );
};

export default NewsLetter;
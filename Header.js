import React from "react";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Header.css';


const Header =() =>{


    return(
        <header className="header">
            <div className="header-content"></div>
           <Carousel 
           showThums ={false} 
           showStatus ={false}
           infiniteLoop
           autoPlay
           interval={3000}
           showArrows ={false} 
        >
            <div className="slider-text">
                <h2>Fast Food Restaurant</h2>
                <p>pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot ...</p>
                <button className="order-button">Now Order</button>
            </div>
            <div className="slider-text">
                <h2>Best Burgers in Town</h2>
              <p>Burgers are perhaps one of the most iconic meals on the planet, and for good reason. Traditional, juicy beef (or chicken), topped with a fresh, delicious salad, complimentary sauces, and sandwiched between two fluffy buns. The true perfect bite.</p>
                <button className="order-button">Now Order</button>
            </div>
            <div className="slider-text">
                <h2>Delicious Meals</h2>
                <p>In Delicious Foods, James Hannaham tells the gripping story of three unforgettable characters: a mother, her son, and the drug that threatens to destroy them.</p>
                <button className="order-button">Now Order</button>
            </div>
        </Carousel>



        </header>
    );
};

export default Header;
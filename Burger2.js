import React from "react";
import './Burger2.css';

const Burger2 =() =>{


    return(

<div className="burger-section">
    <div className="burger-content">
        <img src="nishant.jpeg" alt="nishant.jpeg"/>
        <div className="burger-text">
            <h2>We Are Feane</h2>
            <p>Hamburger, a food consisting of one or more cooked beef patties, placed inside a sliced bread roll or bun roll.
Cheeseburger, a hamburger with added cheese(s)
Ground beef, minced beef used to make hamburgers
Patty, a portion of ground meat, often round, used to make burgers
Rice burger, uses compressed rice cakes instead of hamburger buns
Veggie burger, a burger made with plant-based meat substitute
Afghani burger, an Afghan fast food wrap consisting of a piece of Afghan bread rolled around french fries, along with chutney and other condiments, vegetables, and often sausages or other meat.</p>
            <button className="read-more-button">Read More</button>
        </div>
    </div>
</div>
    );
};
export default Burger2;
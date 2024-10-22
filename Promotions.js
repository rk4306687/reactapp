import React from "react";
import'./Promotions.css';
import { FaShoppingCart } from "react-icons/fa";

const Promotions = () => {

return(
    <div className="promotions">
        <div className="promotion-card">
            <img src="/image.jpeg"alt="Burger" />
            <div className="promotion-content">
                <div className="promotion-title">Testy thusrdays</div>
                <div className="promotion-discount"> 20% off</div>
                <button className="order-button"> Order Now <FaShoppingCart /></button>
            </div>
                </div>
                <div className="promotion-card">
            <img src="images (2).jpeg"alt="Pizza" />
            <div className="promotion-content">
                <div className="promotion-title">Pizza  days</div>
                <div className="promotion-discount"> 15% off</div>
                <button className="order-button"> Order Now <FaShoppingCart /></button>
            </div>
                </div>

        </div>
        


);

};
export default Promotions;
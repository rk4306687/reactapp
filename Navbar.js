import React, { useState } from "react";
import { FaBars, FaSearch, FaShoppingCart, FaTimes, FaUser } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {


    const[isMobile , setIsMobile] = useState(false);

    return (
        <nav className="Navbar">
            <h1 className="Navbar-logo">Feane</h1>
            <div className={isMobile ?"nav-links-mobile" : "nav-links"}>
                <a href="home">Home</a>
                <a href="menu">Menu</a>
                <a href="about">About</a>
                <a href="book-table"> Book Table</a>
                <FaUser className="nav-icon"></FaUser>
                <FaShoppingCart className="nav-icon"></FaShoppingCart>
                <FaSearch className="nav-icons"></FaSearch>
                <button className="order-button">Order Online</button>
                </div>
                <div className="mobile-menu-icon" onClick={()=>setIsMobile(! isMobile)}>
                    {isMobile ? <FaTimes/> : <FaBars/>}
                </div>
                
                </nav>


    );
};

export default Navbar;

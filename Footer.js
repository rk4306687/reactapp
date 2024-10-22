import React from "react";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaPhone, FaPinterest, FaTwitter } from "react-icons/fa";



import './Footer.css';

const Footer=() =>{
    return(
        <footer className="footer">
            <div className="footer-section">
                <h3>contact Us</h3>
                <p><FaMapMarkedAlt /> Location</p>
                <p><FaPhone />Call +91 7808383527</p>
                <p><FaEnvelope />rk4306687@gamil.com</p>
                </div>
                <div className="footer-section">
                    <h3>frane</h3>
                    <p>Burgers: the 'meaty' answer to all your hunger pangs." "Burger lovers unite! It's time to 'meat' your match." "Burger cravings are a 'rare' treat</p>
                </div>
                <div className="social-icon">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedin />
                    <FaInstagram />
                    <FaPinterest />
                </div>
                <div className="footer-section">
                    <h3>Opeing Hoursse</h3>
                    <p>Everyday</p>
                    <p>10.00Am_10.00Pm</p>
                </div>
                <div className="footer-button">
                    <p>@ 2024 All right Reserved by Free Nishant</p>
                    <p>@ distributed by Nishant</p>
                </div>

        </footer>
        
    )
}
export default Footer;
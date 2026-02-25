import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <div className="footer">
        <div className="footer-menus">
            <div className="footer-menu">
                <ul>
                    <Link to='/'><li>Shop All</li></Link>
                    <Link to='/products/men'><li>Men</li></Link>
                    <Link to='/products/women'><li>Women</li></Link>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="help-menu">
                <ul>
                    <li>Shipping & Returns</li>
                    <li>Store Policy</li>
                    <li>Payment Methods</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className="subscribe-menu">
                <p>Join our mailing list and get 10% off your purchase</p>
                <label htmlFor="subscribe">Enter your email here*</label>
                <input type="email" name="subscribe" id="" className="email"/>
                
                <label className="checkbox-container">
                        <input type="checkbox" name="newsletter" />
                        <span>Yes, subscribe me to your newsletter.*</span>
                </label>
                <button>Subscribe</button>
            </div>
        </div>
        <p className="designer">&copy; M.Tarun 💗</p>
        </div>
    )
}
export default Footer;
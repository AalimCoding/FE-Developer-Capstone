import { Routes, Link, Route } from 'react-router-dom';
import Chicago from "./Chicago.js";
import CallToAction from "./CallToAction.js";
import BookingPage from "./BookingPage.js";
import CustomersSay from "./CustomersSay.js";

function Nav(props) {
    return (
        <nav className="headerGrid">
            <img src="/LittleLemonLogo.png" alt="Little Lemon Logo" />
            <Link to="/About" className="nav-item">About</Link>
            <Link to="/ReserveATable" className="nav-item">Reserve A Table</Link>
            <Link to="/Testimonials" className="nav-item">Testimonials</Link>
            <Link to="/About" className="nav-item">Backstory</Link>
        </nav>
    );
}

export default Nav;
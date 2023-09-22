import { Routes, Link, Route } from 'react-router-dom';
import Main from "./Main.js";
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
            <Link to="/Backstory" className="nav-item">Backstory</Link>

            <Routes>
                <Route path="/About" element={<CallToAction />} />
                <Route path="/ReserveATable" element={<BookingPage availableTimes={props.availableTimes} dispatch={props.dispatch} />} />
                <Route path="/Testimonials" element={<CustomersSay />} />
                <Route path="/Backstory" element={<Chicago />} />
            </Routes>
        </nav>
    );
}

export default Nav;

import { Routes, Link, Route} from 'react-router-dom';
import Main from "./Main.js";
import Chicago from "./Chicago.js";
import CallToAction from "./CallToAction.js";
import BookingPage from "./BookingPage.js";
import CustomersSay from "./CustomersSay.js";

function Nav() {
    return (

        <nav class="headerGrid" >

            <img src="/LittleLemonLogo.png" ></img>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/About" className="nav-item">About</Link>
            <Link to="/Reserve A Table" className="nav-item">Reserve A Table</Link>
            <Link to="/Testimonials" className="nav-item">Testimonials</Link>
            <Link to="/Backstory" className="nav-item">Backstory</Link>

            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/About" element={<CallToAction />}></Route>
                <Route path="/Reserve A Table" element={<BookingPage />}></Route>
                <Route path="/Testimonials" element={<CustomersSay />}></Route>
                <Route path="/Backstory" element={<Chicago />}></Route>
            </Routes>

        </nav>)
}

export default Nav;
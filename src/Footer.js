import { Routes, Link, Route, useNavigate } from 'react-router-dom';

function Footer() {
    return (

        <div class="footerGrid">

            <img src="/LittleLemonLogo.png" width="200px"></img>

            <ul class="flex-container">Doormat Navigation

                <li class="box box2">
                    <Link to="/About" className="nav-item">About</Link>
                </li>
                <li class="box box3">
                    <Link to="/ReserveATable" className="nav-item">Reserve A Table</Link>
                </li>
                <li class="box box4">
                    <Link to="/Testimonials" className="nav-item">Testimonials</Link>
                </li>
                <li class="box box5">
                    <Link to="/Backstory" className="nav-item">Backstory</Link>
                </li>


            </ul>

            <ul class="flex-container">Contact
                <li class="box box1">
                    Address
                </li>
                <li class="box box2">
                    Phone Number
                </li>
                <li class="box box3">
                    Email
                </li>

            </ul>

            <ul class="flex-container">Social Media Links
                <li class="box box1">
                    Address
                </li>
                <li class="box box2">
                    Phone Number
                </li>
                <li class="box box3">
                    Email
                </li>


            </ul>
        </div>
    )
}

export default Footer;
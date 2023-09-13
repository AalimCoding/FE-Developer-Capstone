import { Routes, Route, Link } from "react-router-dom";

function Footer(){return(

<div><img src="/LittleLemonLogo.png" width="200px"></img>
    <ul>Doormat Navigation
        <li>
            <a href="Home">Home</a>
        </li>
        <li>
            <a href="About">About</a>
        </li>
        <li>
            <a href="Reservations">Reservations</a>
        </li>
        <li>
            <a href="Order Online">Order Online</a>
        </li>
        <li>
            <a href="Menu">Menu</a>
        </li>
        <li>
            <a href="Login">Login</a>
        </li>
    </ul>

    <ul>Contact
        <li>
            Address
        </li>
        <li>
            Phone Number
        </li>
        <li>
            Email
        </li>

    </ul>

    <ul>Social Media Links
        <li>
            Address
        </li>
        <li>
            Phone Number
        </li>
        <li>
            Email
        </li>

    </ul>
</div>
)}

export default Footer;
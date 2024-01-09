import { Routes, Link, Route } from 'react-router-dom';

function CallToAction() {
    return (

        <div class="grid" id="Intro1">

            <h1 class="box box1" id="IntroTitle">Little Lemon</h1>
            <h2 class="box box2" id="IntroSubtitle">Chicago</h2>
            <p class="box box3" id="IntroText">Welcome to Little Lemon, a vibrant Mediterranean restaurant situated in the heart of Chicago! We're excited to have you dine with us, and look forward to creating an experience to match any occasion!</p>
            <button class="box box4" id="IntroButton">
                <Link to="/ReserveATable" className="nav-item">Reserve A Table</Link>
            </button>
            <div class="box box5" id="IntroImage">
                <img src="/restaurantfood.jpg" width="100%"></img>
            </div>
        </div>)
}

export default CallToAction;
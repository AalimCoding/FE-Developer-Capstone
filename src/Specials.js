function Specials() {
    return (
        <div>

            <div class="grid" id="specialsIntro">
                <h1>Specials</h1>
                <button>Online Menu</button>
            </div>

            <div class="flex-container" id="specialsFlex">

                <div class="special">
                    <img src="/greek salad.jpg"></img>
                    <div>
                        <h2>Greek salad</h2><h3>Price</h3>
                    </div>
                    <p> The famous Greek salad of crispy lettuce,
                        peppers, olives and our Chicago style feta
                        cheese, garnished with crunchy garlic and
                        rosemary croutons</p>
                    <div id="iconGrid">
                        <h4>Order a delivery</h4>
                        <img src="/Bike Icon.png"></img>
                    </div>
                </div>

                <div class="special">
                    <img src="/bruschetta.jpeg"></img>
                    <div>
                        <h2>Bruschetta</h2><h3>Price</h3>
                    </div>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                    <div id="iconGrid">
                        <h4>Order a delivery</h4>
                        <img src="/Bike Icon.png"></img>
                    </div>

                </div>

                <div class="special">
                    <img src="/lemon dessert.jpg"></img>
                    <div>
                        <h2>Lemon Dessert</h2><h3>Price</h3>


                    </div>
                    <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>

                    <div id="iconGrid">
                        <h4>Order a delivery</h4>
                        <img src="/Bike Icon.png"></img>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Specials;
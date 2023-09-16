function Main() {
    return (
        <div>

            <div class="grid" id="Intro1">

                <h1 class="box box1" id="IntroTitle">Little Lemon</h1>
                <h2 class="box box2" id="IntroSubtitle">Chicago</h2>
                <p class="box box3" id="IntroText">Lorem ipsum ...this text keeps on going for a while</p>
                <button class="box box4" id="IntroButton">Reserve a table</button>
                <div class="box box5" id="IntroImage">
                    <img src="/restaurantfood.jpg" width="100%"></img>
                </div>
            </div>


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

            <div class="flex-container" id="testimonialsContainer">
                <h1 id="testimonials">Testimonials</h1>
                <div class="testimonial">
                    <h6>⭐⭐⭐⭐</h6>
                    <img src="/man1.jpeg"></img>
                    <h6>John Smith</h6>
                    <p>I thought the food was amazing, but unfortunately I felt that there were a lack of options.</p>
                </div>
                <div class="testimonial">
                    <h6>⭐⭐⭐⭐⭐</h6>
                    <img src="/man2.jpeg"></img>
                    <h6>Harvey Jones</h6>
                    <p>The best meal I've ever eaten. I can't wait to come back!</p>
                </div>
                <div class="testimonial">
                    <h6>⭐⭐⭐</h6>
                    <img src="/woman2.jpeg"></img>
                    <h6>Katy Crabtree</h6>
                    <p>An average meal, lacking the spark to make it unique.</p>
                </div>
                <div class="testimonial">
                    <h6>⭐⭐⭐⭐</h6>
                    <img src="/woman1.jpeg"></img>
                    <h6>Louisa Garfield</h6>
                    <p>A lovely meal to have with a friend. I will visit again soon!</p>
                </div>
            </div>



            <div class="grid" id="Intro2">
                <h1 class="box box1" id="IntroTitle">Little Lemon</h1>
                <h2 class="box box2" id="IntroSubtitle">Chicago</h2>
                <p class="box box3" id="IntroText">Lorem ipsum ...this text keeps on going for a while</p>
                <img class="box box4" id="IntroImage" src="/restaurantfood.jpg" width="100%"></img>

            </div>



        </div>)
}



export default Main;


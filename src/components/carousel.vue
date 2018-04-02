<template>
    <header class="carousel container-fluid">
        <div id="carouselID" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselID" data-slide-to="0" class="active"></li>
                <li data-target="#carouselID" data-slide-to="1"></li>
                <li data-target="#carouselID" data-slide-to="2"></li>
            </ol>
            <div id="#carouselID" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <img class="d-block w-100 img-fluid" src="../assets/pizza.jpeg" alt="First slide">
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Nos pizzas maison</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 img-fluid" src="../assets/filipino.jpeg" alt="Second slide">
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Voyage au Philipines</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit es</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 img-fluid" src="../assets/plateauvin.jpg" alt="Third slide">
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Plateau à partager</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselID" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselID" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </header>
</template>
<script>

export default {
}
</script>
<style>
.carousel {
    padding: 0;
}
h2 {
    color: white;
}

</style>

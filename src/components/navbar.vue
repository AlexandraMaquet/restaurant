<template>
<nav class="container-fluid">
    <div class="container navbar fixed-top navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
            <ul class="navbar-nav navbar-right mt-2 mt-lg-0">
                <li class="active"><a href="#" data-nav-section="welcome">BIENVENUE</a></li>
                <li><a href="#" data-nav-section="specialties">SPÉCIALITÉES</a></li>
                <li><a href="#" data-nav-section="menu">MENU</a></li>
                <li><a href="#" data-nav-section="reservation">RÉSERVATION</a></li>
                <li><a href="#" data-nav-section="events">EVENEMENTS</a></li>
                <li><a href="#" data-nav-section="contact">CONTACT</a></li>
            </ul>
        </div>
    </div>
</nav>
</template>
<script>
export default {
}
</script>
<style scoped>
* {
    width: 100%;
    height: 50px;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    background-color: black;
}

.navbar {
    position: fixed;
}

.navbar-brand {
    padding-top: 0!important;
    padding-bottom: 0!important;
    font-size: 30px;
    text-transform: uppercase;
    background: url(../assets/logo.png) left top no-repeat;
    position: relative;
    width: 136px;
    height: 40px;
    text-indent: -999999px;
    -webkit-transition: .2s all;
    transition: .2s all;
}

li {
    width: auto;
    padding: 15px 4% 0 0;
}
</style>

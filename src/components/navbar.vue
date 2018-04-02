<template>
<nav class="container-fluid">
    <div class="container navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto navbar-right">
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
}

.navbar {
    margin-top: 15px;
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

ul {
    text-align: right;
}

li {
    width: auto;
    padding: 15px 4% 0 2%;
}

a {
    padding-top: 10px;
}
</style>

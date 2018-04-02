<template>
  <div id="app">
    <navbar></navbar>
    <carousel></carousel>
    <img src="./assets/logo.png">
    <router-view/>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

body {
  background: #E4E4E4;
  color: #8b8e94;
  line-height: 24px;
  font-size: 15px;
  font-family: "Open Sans", Arial, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1.5;
  font-family: "Open Sans", Arial, sans-serif;
}

h1 {
  font-size: 46px;
}

h2 {
  font-size: 36px;
}

h3 {
  font-size: 28px;
}

h4 {
  font-size: 36px;
}

h5, h6 {
  font-size: 14px;
}

p, ul, ol {
  margin-bottom: 30px;
}

a {
  -webkit-transition: .3s all;
  transition: .3s all;
  color: #FFA33E;
}

a:hover, a:focus, a:active {
  color: #ff9725;
  text-decoration: none;
}
</style>

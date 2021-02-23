<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
}
</script>

<style lang="scss">
$white: hsl(0, 0%, 100%);
$dark-gray: hsl(0, 0%, 52%);
$very-light-gray:  hsl(0, 0%, 98%);
$very-dark-blue: hsl(200, 15%, 8%);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  color: $very-dark-blue;
  background-color: $very-light-gray;
  min-height: 100vh;
}

.container {
  width: 90vw;
  margin: 0 auto;
}
.card {
  border: 1px solid rgba(0,0,0,.1);
  box-shadow: 0px 0px 10px 2px rgba(0,0,0,.1);
  &.round {
    border-radius: 5px;
  }
}
.btn {
  padding: .5rem 1.5rem;
}
</style>

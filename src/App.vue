<template>
  <div id="app">
    <!--    <div id="nav">-->
    <!--      <router-link to="/">Home</router-link> |-->
    <!--      <router-link to="/about">About</router-link>-->
    <!--    </div>-->
    <Sidebar id="sidebar" title="CONSOLE"/>
    <router-view/>
  </div>
</template>

<script>
  import Sidebar from "./components/Sidebar";

  export default {
    components: {Sidebar}
  }

</script>

<style lang="scss">

  html {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  #app {
    display: flex;
    flex-direction: row;
    font-family: PingFang,"Helvetica Neue", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000000;
    background-color: #f4f4f4;
    height: 100%;
  }

  #sidebar {
    flex: 0 1 auto;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>

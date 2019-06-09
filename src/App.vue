<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <Sidebar title="CONSOLE"/>
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

  html{
    padding: 0;
    margin: 0;
  }
  body {
    padding: 0;
    margin: 0;
  }
#app {
  display: flex;
  flex-direction: row;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f4f4f4;
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

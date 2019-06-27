<template>
  <div id="app">
    <Sidebar id="sidebar" v-bind:menus="menus"/>
    <keep-alive>
      <router-view id="router"/>
    </keep-alive>
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  import SVGRefund from '@/assets/ic_refund.svg'
  import SVGCancel from '@/assets/ic_cancel.svg'
  import SVGEquip from '@/assets/ic_equip.svg'
  import SVGVideo from '@/assets/ic_video.svg'

  export default {

    data: () => {
      return {
        menus: [
          {
            name: 'refund',
            icon: SVGRefund,
            link: '/refund'
          },
          {
            name: 'cancel',
            icon: SVGCancel,
            link: '/cancel'
          },
          {
            name: 'equip',
            icon: SVGEquip,
            link: '/equip'
          },
          {
            name: 'video',
            icon: SVGVideo,
            link: '/video'
          }
        ]
      }
    },
    components: {
      Sidebar
    }
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
    min-width: 1000px;
  }

  #app {
    display: flex;
    flex-direction: row;
    font-family: "Helvetica Neue", PingFang, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000000;
    background-color: #f4f4f4;
    height: 100%;
  }

  #sidebar {
    flex: 0 0 auto;
  }

  #router {
    flex: 1 1 auto;
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

<template>
  <div class="sidebar">
    <SVGMenu id="menu-button"/>
  </div>
</template>

<script>
  import SVGMenu from '@/assets/ic_menu.svg'

  export default {
    name: 'Sidebar',
    props: {
      title: String
    },
    components: {
      SVGMenu
    }
  }
</script>

<style scoped lang="scss">
  .sidebar {
    display: inline-block;
    width: 56px;
    box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.08);
    background: #ffffff;
  }

  #menu-button {
    cursor: pointer;
  }
</style>
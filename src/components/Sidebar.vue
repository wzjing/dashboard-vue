<template>
  <div class="sidebar">
    <div class="sidebar-button-menu">
      <SVGMenu class="sidebar-menu--icon" @click="menuClick()"/>
    </div>
    <div class="sidebar-spacing1"></div>
    <router-link v-for="(menu, index) in menus"
                 :key="index"
                 v-bind:class="$route.path === menu.link? 'sidebar-menu sidebar-menu--selected' : 'sidebar-menu'"
                 v-bind:to="menu.link">
      <component class="sidebar-menu--icon" v-bind:is="menu.icon"></component>
    </router-link>
    <div class="sidebar-spacing2"></div>
    <router-link class="sidebar-button-setting" to="/setting" @click.native="typeIndex = -1">
      <SVGSetting class="sidebar-menu--icon"/>
    </router-link>
  </div>
</template>

<script>
  import SVGMenu from '@/assets/ic_menu.svg'
  import SVGSetting from '@/assets/ic_setting.svg'
  import SVGEvent from '@/assets/ic_event.svg'
  import SVGVideo from '@/assets/ic_video.svg'
  import SVGAvatar from '@/assets/ic_avatar.svg'

  export default {
    name: 'Sidebar',
    props: {
      menus: Array
    },
    methods: {
      menuClick() {
        console.log('menu click')
      }
    },
    data() {
      return {
        svgPath: '../assets/ic_cancel.svg',
        typeIndex: 0
      }
    },
    components: {
      SVGMenu,
      SVGSetting,
      SVGEvent,
      SVGVideo,
      SVGAvatar
    }
  }
</script>

<style scoped lang="scss">

  $menu_size: 28px;

  .sidebar {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 48px;
    box-sizing: border-box;
    padding: 6px 0;
    box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.08);
    background: #ffffff;
    user-select: none;
  }

  .sidebar-button-menu {
    flex: 0 0 $menu_size;
    width: 100%;
    justify-content: flex-start;
    cursor: pointer;
  }

  .sidebar-spacing1 {
    flex: 0 1 10px;
  }

  .sidebar-menu {
    flex: 0 0 auto;
    width: 100%;
    position: relative;
    cursor: pointer;
    filter: grayscale(100%);
    background: #ffffff;

    &:hover {
      background: #dfdfdf;
    }

  }

  .sidebar-menu--selected {
    background: #dfdfdf;
    filter: none;

    &:hover {
      background: #dfdfdf;
    }
  }

  .sidebar-menu--icon {
    width: $menu_size;
    height: $menu_size;
    padding: 4px;
    box-sizing: content-box;
    background: transparent;
  }

  .sidebar-spacing2 {
    flex: 3 1 auto;
  }

  .sidebar-button-setting {
    flex: 0 0 $menu_size;
    width: 100%;
    justify-content: flex-end;
    position: relative;
    cursor: pointer;
    user-select: none;
  }
</style>
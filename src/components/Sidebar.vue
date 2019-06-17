<template>
  <div class="sidebar">
    <SVGMenu class="sidebar-button-menu"/>
    <div class="sidebar-spacing1"></div>
    <div v-for="(menu, index) in menus"
         :key="index"
         v-bind:class="currentIndex === index? 'sidebar-menu sidebar-menu--selected' : 'sidebar-menu'"
         @click="currentIndex = index">
      <component class="sidebar-menu--icon" v-bind:is="menu.icon"></component>
      <router-link class="sidebar-router-link" v-bind:to="menu.link"></router-link>
    </div>
    <div class="sidebar-spacing2"></div>
    <SVGAvatar class="sidebar-avatar"/>
    <div class="sidebar-button-setting">
      <SVGSetting/>
      <router-link class="sidebar-router-link" to="/setting" @click.native="currentIndex = -1"></router-link>
    </div>
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
    data: () => {
      return {
        svgPath: require('../assets/ic_cancel.svg'),
        currentIndex: 0
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

  $menu_size: 36px;

  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 56px;
    box-sizing: border-box;
    padding: 16px 0;
    box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.08);
    background: #ffffff;
  }

  .sidebar-router-link {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .sidebar-button-menu {
    flex: 0 0 36px;
    justify-content: flex-start;
    cursor: pointer;
    user-select: none;
  }

  .sidebar-spacing1 {
    flex: 1 1 36px;
  }

  .sidebar-menu {
    flex: 0 0 32px;
    width: 100%;
    position: relative;
    cursor: pointer;
    filter: grayscale(100%);

    &:hover {
      filter: grayscale(40%);
    }

  }

  .sidebar-menu--selected {
    background: #dfdfdf;
    filter: none;

    &:hover {
      filter: none;
    }
  }

  .sidebar-menu--icon {
    width: $menu_size;
    height: $menu_size;
    margin: 6px 0;
    background: transparent;
  }

  .sidebar-spacing2 {
    flex: 3 1 auto;
  }

  .sidebar-avatar {
    flex: 0 0 36px;
    margin-bottom: 20px;
    justify-content: flex-end;
    cursor: pointer;
    user-select: none;
  }

  .sidebar-button-setting {
    flex: 0 0 36px;
    justify-content: flex-end;
    position: relative;
    cursor: pointer;
    user-select: none;
  }
</style>
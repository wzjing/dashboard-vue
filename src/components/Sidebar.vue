<template>
  <div class="sidebar">
    <div class="sidebar-logo" @click="$router.push('/')">
      <SVGMenu class="sidebar-logo--icon"/>
    </div>

    <div class="sidebar-content">
      <div class="sidebar-menu-layout">
        <div v-for="(menu, index) in menus"
             :key="index"
             class="sidebar-menu"
             v-bind:class="{'sidebar-menu--selected' : $route.path === menu.link}">
          <component class="sidebar-menu--icon" v-bind:is="menu.icon" @click="$router.push(menu.link)"></component>
        </div>
      </div>
      <div class="sidebar-button-setting" @click="$router.push('/setting')">
        <SVGSetting/>
      </div>
    </div>
  </div>
</template>

<script>
  import SVGMenu from '@/assets/ic_menu.svg'
  import SVGSetting from '@/assets/ic_setting.svg'
  import SVGVideo from '@/assets/ic_video.svg'
  import SVGAvatar from '@/assets/ic_avatar.svg'

  export default {
    name: 'Sidebar',
    props: {
      menus: Array
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
    width: 48px;
    box-sizing: border-box;
    user-select: none;
  }

  .sidebar-logo {
    flex: 0 0 48px;
    width: 100%;
    cursor: pointer;
    box-sizing: border-box;
    box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.08);
    background: white;

    &:hover {
      box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.08);
    }
  }

  svg {
    display: block;
    margin: auto;
  }

  .sidebar-logo--icon {
    width: 48px;
    height: 48px;
    box-sizing: border-box;
  }

  .sidebar-content {
    flex: 1 1 auto;
    width: 100%;
    margin-top: 1px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.08);
    background: white;
  }

  .sidebar-menu-layout {
    flex: 0 0 auto;
    width: 100%;
    display: flex;
    margin-top: 32px;
    flex-direction: column;
  }

  .sidebar-menu {
    flex: 0 0 auto;
    width: 100%;
    padding: 4px 0;
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

  .sidebar-button-setting {
    flex: 0 0 auto;
    width: 100%;
    margin-bottom: 24px;
    position: relative;
    cursor: pointer;
    user-select: none;
  }
</style>
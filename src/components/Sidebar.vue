<template>
  <div class="sidebar">
    <SVGMenu id="menu-button"/>
    <div id="sidebar-spacing1"></div>
    <SVGHolder class="sidebar-menu--icon"/>
    <SVGHolder class="sidebar-menu--icon"/>
    <SVGHolder class="sidebar-menu--icon"/>
    <div id="sidebar-spacing2"></div>
    <SVGSetting id="setting-button"/>
  </div>
</template>

<script>
  import SVGMenu from '@/assets/ic_menu.svg'
  import SVGSetting from '@/assets/ic_setting.svg'
  import SVGHolder from '@/assets/ic_holder.svg'

  export default {
    name: 'Sidebar',
    components: {
      SVGMenu,
      SVGSetting,
      SVGHolder
    }
  }
</script>

<style scoped lang="scss">
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

  #menu-button {
    flex: 0 0 auto;
    justify-content: flex-start;
    cursor: pointer;
    user-select: none;
  }

  #sidebar-spacing1 {
    flex: 1 1 auto;
  }

  .sidebar-menu--icon {
    flex: 0 0 auto;
    margin: 6px 0;
  }

  #sidebar-spacing2 {
    flex: 3 1 auto;
  }

  #setting-button {
    flex: 0 0 auto;
    justify-content: flex-end;
    cursor: pointer;
    user-select: none;
  }
</style>
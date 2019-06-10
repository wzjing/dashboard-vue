<template>
  <div class="home">
    <div id="title">
      <div class="logo-text">DASHBOARD</div>
      <SVGAvatar class="avatar" width="32px" height="32px"/>
      <div class="user-name">Guest</div>
    </div>
    <div class="card-group">
      <Card id="card1" class="card-item"/>
      <Card id="card2" class="card-item"/>
      <Card id="card3" class="card-item"/>
    </div>
    <div class="event-list">
      <EventList/>
    </div>
  </div>
</template>

<script>
  import Card from '@/components/Card.vue'
  import EventList from '@/components/EventList.vue'
  import SVGAvatar from '@/assets/ic_avatar.svg'

  export default {
    name: 'home',
    components: {
      SVGAvatar,
      Card,
      EventList
    }
  }
</script>

<style scoped lang="scss">

  .home {
    box-sizing: border-box;
    padding: 28px 56px;
  }

  #title {
    display: flex;
    flex-direction: row;
    text-align: left;
    align-items: center;
  }

  .logo-text {
    font-size: 26px;
    display: inline-block;
    font-family: "Microsoft YaHei UI", sans-serif;
    font-weight: normal;
  }

  .avatar {
    margin: 0 0 0 24px;
  }

  .user-name {
    display: inline-block;
    margin: 0 0 0 8px;
    font-size: 14px;
    color: #6F6F6F;
  }

  .card-group {
    margin: 48px 0 0 0;
  }

  .card-item {
    margin: 0 28px 0 0;
  }

  .event-list {
    margin: 48px 0 0 0;
    height: 150px;
  }
</style>

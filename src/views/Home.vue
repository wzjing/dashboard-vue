<template>
  <div class="home">
    <div id="title">
      <div class="logo-text">DASHBOARD</div>
      <SVGAvatar class="avatar"/>
      <div class="user-name">Guest</div>
    </div>
    <div class="card-group">
      <Card id="card1" class="card-item"/>
      <Card id="card2" class="card-item"/>
      <Card id="card3" class="card-item"/>
    </div>
    <div class="event-list">
      list
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
  #title {
    display: flex;
    flex-direction: row;
    text-align: left;
    margin: 24px 0 0 32px;
    align-items: center;
  }

  .logo-text {
    font-size: 24px;
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
    margin: 24px 0 0 32px;
  }

  .card-item {
    margin: 0 28px 0 0;
  }

  .event-list {
    height: 150px;
  }
</style>

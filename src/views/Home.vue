<template>
  <div class="home">
    <div class="title-layout">
      <div class="logo-text">DASHBOARD</div>
      <SVGAvatar class="avatar" width="32px" height="32px"/>
      <div class="user-name">Guest</div>
    </div>
    <div class="sort-layout">
      <CardList v-bind:listData="sortListData.data" v-bind:listSelection="sortListData.selection"/>
    </div>
    <div class="event-layout">
      <EventList/>
    </div>
  </div>
</template>

<script>
  import CardList from '@/components/CardList.vue'
  import EventList from '@/components/EventList.vue'
  import SVGAvatar from '@/assets/ic_avatar.svg'

  export default {
    name: 'home',
    data: () => {
      return {
        sortListData: {
          selection: 0,
          data: [
            {
              key: 0,
              title: "退款订单",
              content: "个未处理",
              number: "17"
            },
            {
              key: 1,
              title: "取消订单",
              content: "个未处理",
              number: "5"
            },
            {
              key: 2,
              title: "装备订单",
              content: "个未处理",
              number: "0"
            }
          ]
        }
      }
    },
    components: {
      SVGAvatar,
      CardList,
      EventList
    }
  }
</script>

<style scoped lang="scss">

  $left_margin: 56px;

  .home {
    box-sizing: border-box;
    padding: 28px 0;
    display: flex;
    flex-direction: column;
  }

  .title-layout {
    flex: 0 0 auto;
    margin-left: $left_margin;
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

  .sort-layout {
    flex: 0 0 auto;
    margin: 48px 0 0 $left_margin;
  }

  .event-layout {
    flex: 1 1 auto;
    overflow: visible auto;
    padding: 24px 28px;
    margin: 48px 0 0 $left_margin/2;
    height: 150px;
  }
</style>

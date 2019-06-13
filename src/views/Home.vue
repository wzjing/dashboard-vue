<template>
  <div class="home">
    <div class="title-layout">
      <div class="logo-text">DASHBOARD</div>
      <SVGAvatar class="avatar" width="32px" height="32px"/>
      <div class="user-name">Guest</div>
    </div>
    <div class="sort-layout">
      <CardList v-bind:listData="sortListData"/>
    </div>
    <div class="filter-layout">
      <ListFilter v-bind:options="filterOptions"/>
    </div>
    <div class="event-layout">
      <EventList v-bind:listData="eventListData"/>
    </div>
  </div>
</template>

<script>
  import CardList from '@/components/CardList.vue'
  import EventList from '@/components/EventList.vue'
  import ListFilter from '@/components/ListFilter.vue'
  import SVGAvatar from '@/assets/ic_avatar.svg'

  export default {
    name: 'home',
    components: {
      CardList,
      EventList,
      ListFilter,
      SVGAvatar
    },
    data: () => {
      return {

        sortListData: [
          {
            title: "退款订单",
            content: "个未处理",
            number: "17"
          },
          {
            title: "取消订单",
            content: "个未处理",
            number: "5"
          },
          {
            title: "装备订单",
            content: "个未处理",
            number: "0"
          }
        ],
        filterOptions: [
          "全部订单",
          "未处理",
          "已处理"
        ],
        eventListData: [
          {
            time: new Date(),
            title: "退款申请",
            user: "斯巴克",
            content: "双方协商退款，退款金额：24元"
          },
          {
            time: new Date(),
            title: "退款申请",
            user: "契诃夫",
            content: "订单已退回，退款金额：24元"
          },
          {
            time: new Date(),
            title: "退款申请",
            user: "苏鲁",
            content: "快递员未能送达，退款金额：24元"
          }
        ]
      }
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

  .filter-layout {
    flex: 0 0 auto;
    margin: 20px 0 0 $left_margin;
  }

  .event-layout {
    flex: 1 1 auto;
    overflow: visible auto;
    padding: 24px 28px;
    margin: 0 0 0 $left_margin/2;
    height: 150px;
  }
</style>

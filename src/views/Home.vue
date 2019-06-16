<template>
  <div class="home">
    <div class="title-layout">
      <div class="title-text">DASHBOARD</div>
      <SVGAvatar class="title-avatar" width="24px" height="24px"/>
      <div class="title-username">Guest</div>
    </div>
    <div class="content-layout">
      <div class="main-layout">
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
      <div class="detail-layout">
        <EventDetail/>
      </div>
    </div>
  </div>
</template>

<script>
  import CardList from '@/components/CardList.vue'
  import EventList from '@/components/EventList.vue'
  import ListFilter from '@/components/ListFilter.vue'
  import EventDetail from '@/components/EventDetail.vue'
  import SVGAvatar from '@/assets/ic_avatar.svg'

  export default {
    name: 'home',
    components: {
      CardList,
      EventList,
      ListFilter,
      EventDetail,
      SVGAvatar
    },
    data: () => {
      return {

        sortListData: [
          {
            title: "退款",
            content: "个未处理",
            number: "17"
          },
          {
            title: "取消",
            content: "个未处理",
            number: "5"
          },
          {
            title: "装备",
            number: "0"
          }
        ],
        filterOptions: [
          "全部",
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
          },
          {
            time: new Date(),
            title: "退款申请",
            user: "苏鲁",
            content: "快递员未能送达，退款金额：24元"
          },
          {
            time: new Date(),
            title: "退款申请",
            user: "苏鲁",
            content: "快递员未能送达，退款金额：24元"
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

  $shadow_margin: 20px;

  .home {
    box-sizing: border-box;
    padding: 28px 24px;
    display: flex;
    flex-direction: column;
  }

  .title-layout {
    flex: 0 0 auto;
    margin: 0 $shadow_margin 0 $shadow_margin;
    display: flex;
    flex-direction: row;
    text-align: left;
    align-items: center;
  }

  .title-text {
    font-size: 24px;
    display: inline-block;
    font-family: "Roboto", sans-serif;
    font-weight: normal;
  }

  .title-avatar {
    margin: 0 0 0 64px;
  }

  .title-username {
    display: inline-block;
    margin: 0 0 0 8px;
    font-size: 14px;
    color: #6F6F6F;
  }

  .content-layout {
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    margin-top: 16px;
  }

  .main-layout {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
  }

  .sort-layout {
    flex: 0 0 auto;
    margin: 0 $shadow_margin 0 $shadow_margin;
  }

  .filter-layout {
    flex: 0 0 auto;
    margin: 24px $shadow_margin 0 $shadow_margin;
  }

  .event-layout {
    flex: 1 1 auto;
    overflow: visible auto;
    padding: $shadow_margin;
    margin-top: 12px;
    height: 150px;
  }

  .detail-layout {
    flex: 1 1 auto;
    margin: 0 24px;
  }
</style>

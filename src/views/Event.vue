<template>
  <div class="home">
    <div class="content-layout">
      <div class="main-layout">
        <div class="sort-layout">
          <TypeList v-bind:listData="sortListData" @type-click="typeClick($event)"/>
        </div>
        <div class="filter-layout">
          <ListFilter v-bind:options="filterOptions"/>
        </div>
        <div class="event-layout">
          <EventList v-bind:listData="eventListData" @item-click="itemClick($event)"/>
        </div>
      </div>
      <div class="detail-layout">
        <EventDetail/>
      </div>
    </div>
  </div>
</template>

<script>
  import TypeList from '@/components/TypeList.vue'
  import EventList from '@/components/EventList.vue'
  import ListFilter from '@/components/ListFilter.vue'
  import EventDetail from '@/components/EventDetail.vue'
  import SVGRefund from '@/assets/ic_refund.svg'
  import SVGCancel from '@/assets/ic_cancel.svg'
  import SVGEquip from '@/assets/ic_equip.svg'

  export default {
    name: 'home',
    components: {
      TypeList,
      EventList,
      ListFilter,
      EventDetail
    },
    methods: {
      typeClick: (index) => {
        console.log(`type: ${index}`)
      },
      itemClick: (index) => {
        console.log(`index: ${index}`)
      }
    },
    data: () => {
      return {

        sortListData: [
          {
            icon: SVGRefund,
            type: "退款",
            count: "17"
          },
          {
            icon: SVGCancel,
            type: "取消",
            count: "5"
          },
          {
            icon: SVGEquip,
            type: "装备",
            count: "0"
          }
        ],
        filterOptions: [
          "全部",
          "未处理"
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
    margin: 16px $shadow_margin 0 $shadow_margin;
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

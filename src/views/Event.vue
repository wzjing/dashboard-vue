<template>
  <div class="home">
    <div class="content-layout">
      <div class="main-layout">
        <div class="type-layout">
          <TypeList :listData="events" @type-click="typeClick($event)"/>
        </div>
        <div class="filter-layout">
          <SearchView/>
        </div>
        <div class="event-layout">
          <keep-alive>
            <component :is="events[typeIndex].listView"
                       :listData="events[typeIndex].listData"
                       :type="events[typeIndex].type"
                       @item-click="itemClick($event)"></component>
          </keep-alive>
        </div>
      </div>
      <div class="detail-layout" v-if="events[typeIndex].listData[listIndex]">
        <EventDetail :title="events[typeIndex].type"
                     :eventData="events[typeIndex].listData ? events[typeIndex].listData[listIndex] : null">
          <template>
            <div>
              {{events[typeIndex].listData[listIndex].user}}
            </div>
          </template>
        </EventDetail>
      </div>
    </div>
  </div>
</template>

<script>
  import TypeList from '@/components/TypeList.vue'
  import SearchView from '@/components/SearchView.vue'
  import EventDetail from '@/components/EventDetail.vue'
  import SVGRefund from '@/assets/ic_refund.svg'
  import SVGCancel from '@/assets/ic_cancel.svg'
  import SVGEquip from '@/assets/ic_equip.svg'
  import Sources from '@/sampledata/sources.js'

  export default {
    name: 'home',
    components: {
      TypeList,
      SearchView,
      EventDetail
    },
    methods: {
      typeClick(index) {
        this.typeIndex = index
        switch (index) {
          case 0:
            this.events[index].listData = Sources.refundList
            this.events[index].count = Sources.refundList.length
            break;
          case 1:
            this.events[index].listData = Sources.cancelList
            this.events[index].count = Sources.cancelList.length
            break;
          case 2:
            this.events[index].listData = Sources.equipList
            this.events[index].count = Sources.equipList.length
            break;
        }
      },
      itemClick(index) {
        this.listIndex = index
      }
    },
    data() {
      return {
        typeIndex: 0,
        listIndex: 0,
        filterOptions: [
          "全部",
          "未处理"
        ],
        events: [
          {
            icon: SVGRefund,
            type: "退款",
            listData: [],
            count: 0,
            listView: () => import('@/components/EventList.vue')
          },
          {
            icon: SVGCancel,
            type: "取消",
            listData: [],
            count: 0,
            listView: () => import('@/components/EventList.vue')
          },
          {
            icon: SVGEquip,
            type: "装备",
            listData: [],
            count: 0,
            listView: () => import('@/components/EventList.vue')
          }
        ]
      }
    },
    mounted() {
      console.log('initial data')
      // TODO: get refund list
      this.events[0].listData = Sources.refundList
      this.events[0].count = Sources.refundList.length

      // TODO: get cancel list
      this.events[1].listData = Sources.cancelList
      this.events[1].count = Sources.cancelList.length

      // TODO: get equip list
      this.events[2].listData = Sources.equipList
      this.events[2].count = Sources.equipList.length
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

  .type-layout {
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

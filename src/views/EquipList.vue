<template>
  <div class="equip-list">
    <div class="list-layout">
      <SearchView class="search-view"/>
      <VerticalList
              class="list-view"
              :listData="listData"
              @item-click="itemClick($event)">
        <template v-slot:title="slotProps">
          <span v-if="slotProps.data.type===0">
            装备退回
          </span>
          <span v-else-if="slotProps.data.type===1">
            装备申请
          </span>
        </template>
        <template v-slot:default="slotProps">
          <span v-if="slotProps.data.type === 0">
            原因：{{withDefault(slotProps.data.returnReason, "无")}}
          </span>
          <span v-else-if="slotProps.data.type === 1">
            申请获取快递装备
          </span>
        </template>
      </VerticalList>
    </div>
    <div class="detail-layout" v-if="listData[listIndex]">
      <ContentDetail :title="title"
                     :detailData="listData[listIndex] ? listData[listIndex] : null">
        <template v-slot:default="slotProps">
          <div v-if="slotProps.detailData.type === 0">
            <div class="content-text">退回原因：{{slotProps.detailData.returnReason}}</div>
            <div class="content-text">申请时间：{{formatDate(slotProps.detailData.applyTime)}}</div>
          </div>
          <div v-else-if="slotProps.detailData.type === 1">
            <div class="content-text">申请时间：{{formatDate(slotProps.detailData.applyTime)}}</div>
          </div>
        </template>
      </ContentDetail>
    </div>
  </div>
</template>

<script>
  import SearchView from '@/components/SearchView.vue'
  import ContentDetail from '@/components/ContentDetail.vue'
  import VerticalList from '@/components/VerticalList.vue'
  import TimeUtil from '@/util/timeutil'
  import Sources from '@/sampledata/sources.js'

  export default {
    name: 'EquipList',
    components: {
      SearchView,
      ContentDetail,
      VerticalList
    },
    data() {
      return {
        listIndex: 0,
        listData: []
      }
    },
    methods: {
      formatDate: TimeUtil.formatDate,
      itemClick(index) {
        this.listIndex = index
      },
      withDefault(value, defaultValue) {
        return value ? value : defaultValue
      }
    },
    computed: {
      title() {
        let item = this.listData[this.listIndex]
        return item.type == 0 ? "装备退回" : "装备申请"
      }
    },
    mounted() {
      // TODO: get equip list
      this.listData = Sources.equipList
    }
  }
</script>

<style scoped lang="scss">
  $shadow_margin: 20px;

  .equip-list {
    box-sizing: border-box;
    padding: 28px 12px 12px;
    display: flex;
    flex-direction: row;
  }

  .list-layout {
    flex: 0 0 auto;
    min-width: 300px;
    display: flex;
    flex-direction: column;
  }

  .search-view {
    flex: 0 0 auto;
    margin: 0 $shadow_margin 0 $shadow_margin;
  }

  .list-view {
    position: relative;
    flex: 1 1 auto;
    overflow: auto;
    padding: 10px $shadow_margin;
    margin-top: 8px;
  }

  .detail-layout {
    flex: 1 1 auto;
    margin: 0 24px;
  }

  .content-text {
    text-align: left;
    font-size: 14px;
    margin: 4px 0;
  }

  .content-amount {
    font-size: 18px;
    color: #ff8500;
    margin: 0 4px;
  }
</style>
<template>
  <div class="cancel-list">
    <div class="list-layout">
      <SearchView class="search-view"/>
      <VerticalList
              class="list-view"
              :listData="listData"
              @item-click="itemClick($event)">
        <template v-slot:title="slotProps">
          取消订单
        </template>
        <template v-slot:default="slotProps">
          {{slotProps.data.reason == null ? "无" : slotProps.data.reason}}
        </template>
      </VerticalList>
    </div>
    <div class="detail-layout" v-if="listData[listIndex]">
      <ContentDetail :title="'取消订单'"
                     :detailData="listData[listIndex]">
        <template v-slot:default="slotProps">
          <div class="content-text">订单号：{{slotProps.detailData.code}}</div>
          <div class="content-text">取消原因：{{slotProps.detailData.reason}}</div>
          <div class="content-text">
            订单金额：<span class="content-amount">{{slotProps.detailData.amount}}</span>元
          </div>
          <div class="content-text">申请时间：{{formatDate(slotProps.detailData.applyTime)}}</div>
        </template>
      </ContentDetail>
    </div>
  </div>
</template>

<script>
  import SearchView from '@/components/SearchView.vue'
  import ContentDetail from '@/components/ContentDetail.vue'
  import VerticalList from '@/components/VerticalList.vue'
  import Sources from '@/sampledata/sources.js'
  import TimeUtil from '@/util/timeutil'

  export default {
    name: 'CancelList',
    components: {
      SearchView,
      ContentDetail,
      VerticalList
    },
    methods: {
      formatDate: TimeUtil.formatDate,
      itemClick(index) {
        this.listIndex = index
      }
    },
    data() {
      return {
        listIndex: 0,
        listData: []
      }
    },
    mounted() {
      // TODO: get cancel list
      this.listData = Sources.cancelList
    }
  }
</script>

<style scoped lang="scss">
  $shadow_margin: 20px;

  .cancel-list {
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
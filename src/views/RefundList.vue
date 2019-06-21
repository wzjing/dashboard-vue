<template>
  <div class="refund-list">
    <div class="list-layout">
      <SearchView class="search-view"/>
      <VerticalList class="list-view" :listData="listData" @item-click="itemClick($event)">
        <template v-slot:title="slotProps">退款订单</template>
        <template
          v-slot:default="slotProps"
        >{{slotProps.data.reason == null ? "无" : slotProps.data.reason}}</template>
      </VerticalList>
    </div>
    <div class="detail-layout" v-if="listData[listIndex]">
      <ContentDetail :title="`退款订单 [${listData[listIndex].id}]`" :detailData="listData[listIndex] ? listData[listIndex] : null">
        <template v-slot:default="slotProps">
          <div class="content-text">退款原因：{{slotProps.detailData.reason}}</div>
          <div class="content-text">
            退款金额：
            <span class="content-amount">{{slotProps.detailData.amount}}</span>元
          </div>
          <div class="content-text">订单号：{{slotProps.detailData.code}}</div>
          <div class="content-text">申请时间：{{formatDate(slotProps.detailData.applyTime)}}</div>
          <div v-if="slotProps.detailData.status === 1">
            <div class="content-text content-state">
              状态：
              <span style="color:#ff0000">待处理</span>
            </div>
          </div>
          <div v-else-if="slotProps.detailData.status === 2">
            <div class="content-text content-state">
              状态：
              <span style="color:#ffbb00">正在处理</span>
            </div>
            <div class="content-text">处理时间：{{formatDate(slotProps.detailData.dealTime)}}</div>
          </div>
          <div v-else-if="slotProps.detailData.status === 3">
            <div class="content-text content-state">
              状态：
              <span style="color:#00cc00">退款完成</span>
            </div>
            <div class="content-text">处理时间：{{formatDate(slotProps.detailData.dealTime)}}</div>
          </div>
          <div v-else-if="slotProps.detailData.status === 4">
            <div class="content-text content-state">
              状态：
              <span style="color:#ff0000">退款失败</span>
            </div>
            <div class="content-text">失败原因：{{withDefault(slotProps.detailData.failReason, "未知")}}</div>
            <div class="content-text">处理时间：{{formatDate(slotProps.detailData.dealTime)}}</div>
          </div>
        </template>
      </ContentDetail>
    </div>
  </div>
</template>

<script>
import SearchView from "@/components/SearchView.vue";
import ContentDetail from "@/components/ContentDetail.vue";
import VerticalList from "@/components/VerticalList.vue";
import TimeUtil from "@/util/timeutil";
import Sources from "@/sampledata/sources.js";

export default {
  name: "RefundList",
  components: {
    SearchView,
    ContentDetail,
    VerticalList
  },
  data() {
    return {
      listIndex: 0,
      listData: []
    };
  },
  methods: {
    formatDate: TimeUtil.formatDate,
    itemClick(index) {
      this.listIndex = index;
    },
    withDefault(value, defaultValue) {
      return value ? value : defaultValue
    }
  },
  mounted() {
    // TODO: get refund list
    this.listData = Sources.refundList;
  }
};
</script>

<style scoped lang="scss">
$shadow_margin: 20px;

.refund-list {
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

.content-state {
  font-size: 14px;
  margin: 32px 0 0 0;
}
</style>

<template>
  <div class="refund-list">
    <div class="list-layout">
      <SearchView class="search-view" @keyword-change="keyword = $event"/>
      <VerticalList
        class="list-view"
        :listData="filteredList"
        :loading="loading"
        @item-selected="currentItem = $event">
        <template v-slot:title="slotProps">退款订单</template>
        <template v-slot:default="slotProps">{{slotProps.data.reason || "无"}}</template>
      </VerticalList>
    </div>
    <div class="detail-layout" v-if="currentItem">
      <ContentDetail :title="'退款订单'" :detailData="currentItem">
        <template v-slot:default="slotProps">
          <div class="content-text">订单号：{{slotProps.detailData.code}}</div>
          <div class="content-text">退款原因：{{slotProps.detailData.reason || '无'}}</div>
          <div class="content-text">
            退款金额：
            <span class="content-amount">{{slotProps.detailData.amount}}</span>元
          </div>
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
            <div class="content-text">失败原因：{{slotProps.detailData.failReason || "未知"}}</div>
            <div class="content-text">处理时间：{{formatDate(slotProps.detailData.dealTime)}}</div>
          </div>
        </template>
        <template v-slot:action="slotProps">
          <Button
            class="action-button"
            :background="SVGButtonBlue"
            @click="refund(slotProps.detailData.id)"
          >退款</Button>
        </template>
      </ContentDetail>
    </div>
    <div class="detail-layout" v-else></div>
  </div>
</template>

<script>
import SearchView from "@/components/SearchView.vue";
import ContentDetail from "@/components/ContentDetail.vue";
import VerticalList from "@/components/VerticalList.vue";
import Button from "@/components/Button.vue";
import SVGButtonBlue from "@/assets/button_blue.svg";
import TimeUtil from "@/util/timeutil";
import WebUtil from "@/util/webutil";
import axios from "axios";

export default {
  name: "RefundList",
  components: {
    SearchView,
    ContentDetail,
    VerticalList,
    Button
  },
  data() {
    return {
      SVGButtonBlue,
      listData: [],
      keyword: null,
      currentItem: null,
      loading: false
    };
  },
  computed: {
    filteredList: function() {
      let vm = this;
      if (vm.keyword) {
        return vm.listData.filter(item => {
          return new RegExp(vm.keyword).test(
            `${item.id}\n${item.user}\n${item.code}`
          );
        });
      } else {
        return vm.listData;
      }
    }
  },
  methods: {
    formatDate: TimeUtil.formatDate,
    refund(id) {
      let vm = this;
      axios
        .get(WebUtil.getUrl(`executerefund|tranId=${id}`), {
          headers: WebUtil.globalHeaders
        })
        .then(function(res) {
          if (res.data.iStatus === 0) {
            vm.listData.forEach((item, index) => {
              if (item.id === id) {
                vm.listData.splice(index, 1);
              }
            });
            window.alert(`退款订单[${id}]处理成功`);
          } else {
            window.alert(
              `退款订单[${id}]处理失败: ` +
                (res.data.iMsg || `(${res.data.iStatus})未知错误`)
            );
          }
        })
        .catch(function(err) {
          window.alert(`退款订单[${id}]处理失败: ${err}`);
        });
    },
    getData() {
      let vm = this;
      vm.loading = true;
      axios
        .get(WebUtil.getUrl("getdeliveryrefund"), {
          headers: WebUtil.globalHeaders,
          responseType: "json",
          transformResponse: [
            function(data) {
              let list = [];
              data.iRefundList.forEach((item, index) => {
                list[index] = {
                  id: item.iTranId,
                  status: item.iRefundStatus,
                  code: item.iInternalCode,
                  applyTime: new Date(item.iRefundTime),
                  dealTime: new Date(item.iDealTime),
                  finishTime: new Date(item.iCompletedTime),
                  user: item.iName,
                  reason: item.iRefundReason,
                  failReason: item.iFailReason,
                  amount: item.iRefundMoney
                };
              });
              return list;
            }
          ]
        })
        .then(function(res) {
          vm.listData = res.data;
        })
        .catch(function(err) {
          window.alert(`get refund error: ${err}`);
        })
        .finally(function() {
          vm.loading = false;
        });
    }
  },
  mounted() {
    this.getData();
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

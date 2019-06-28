<template>
  <div class="cancel-list">
    <div class="list-layout">
      <SearchView class="search-view" @keyword-change="keyword = $event"/>
      <VerticalList
              class="list-view"
              :listData="filteredList"
              :loadMore="loadMore"
              :loading="loading"
              @item-selected="currentItem = $event"
              @load-more="getData(lastId)">
        <template v-slot:title="slotProps">取消订单</template>
        <template v-slot:default="slotProps">{{slotProps.data.reason || "无"}}</template>
      </VerticalList>
    </div>
    <div class="detail-layout" v-if="currentItem">
      <ContentDetail :title="'取消订单'"
                     :detailData="currentItem">
        <template v-slot:default="slotProps">
          <div class="content-text">订单号：{{slotProps.detailData.code}}</div>
          <div class="content-text">取消原因：{{slotProps.detailData.reason}}</div>
          <div class="content-text">
            订单金额：<span class="content-amount">{{slotProps.detailData.amount}}</span>元
          </div>
          <div class="content-text">申请时间：{{formatDate(slotProps.detailData.applyTime)}}</div>
        </template>
        <template v-slot:action="slotProps">
          <Button class="action-button" :background="SVGButtonRed" @click="reject(slotProps.detailData.id)">驳回</Button>
          <Button class="action-button" :background="SVGButtonBlue" @click="agree(slotProps.detailData.id)">同意</Button>
        </template>
      </ContentDetail>
    </div>
    <div class="detail-layout" v-else></div>
  </div>
</template>

<script>
  import SearchView from '@/components/SearchView.vue'
  import ContentDetail from '@/components/ContentDetail.vue'
  import VerticalList from '@/components/VerticalList.vue'
  import Button from '@/components/Button.vue'
  import SVGButtonBlue from '@/assets/button_blue.svg'
  import SVGButtonRed from '@/assets/button_red.svg'
  import TimeUtil from '@/util/timeutil'
  import WebUtil from '@/util/webutil'
  import axios from 'axios'

  export default {
    name: 'CancelList',
    components: {
      SearchView,
      ContentDetail,
      VerticalList,
      Button
    },
    data() {
      return {
        SVGButtonBlue,
        SVGButtonRed,
        listData: [],
        lastId: 0,
        currentItem: null,
        keyword: null,
        loadMore: false,
        loading: false
      }
    },
    computed: {
      filteredList: function () {
        let vm = this
        if (vm.keyword) {
          return vm.listData.filter(item => {
            return new RegExp(vm.keyword).test(`${item.id}\n${item.user}\n${item.code}`)
          })
        } else {
          return vm.listData
        }
      }
    },
    methods: {
      formatDate: TimeUtil.formatDate,
      reject(id) {
        let vm = this
        axios.get(WebUtil.getUrl(`refusecancelbeforepickup|deliveryId=${id}`), {
          headers: WebUtil.globalHeaders
        }).then(function (res) {
          if (res.data.iStatus === 0) {
            vm.listData.forEach((item, index) => {
              if (item.id === id)
                vm.listData.splice(index, 1)
            })
            window.alert(`取消订单[${id}]驳回成功`)
          } else {
            window.alert(`取消订单[${id}]驳回失败: ` + (res.data.iMsg || `(${res.data.iStatus})未知错误`))
          }
        }).catch(function (err) {
          window.alert(`取消订单[${id}]驳回失败: ${err}`)
        })
      },
      agree(id) {
        let vm = this
        axios.get(WebUtil.getUrl(`agreecancelbeforepickup|deliveryId=${id}`), {
          headers: WebUtil.globalHeaders
        }).then(function (res) {
          if (res.data.iStatus === 0) {
            vm.listData.forEach((item, index) => {
              if (item.id === id)
                vm.listData.splice(index, 1)
            })
            window.alert(`订单[${id}]取消成功`)
          } else {
            window.alert(`订单[${id}]取消失败: ` + (res.data.iMsg || `(${res.data.iStatus})未知错误`))
          }
        }).catch(function (err) {
          window.alert(`订单[${id}]取消失败: ${err}`)
        })
      },
      getData(lastId) {
        let vm = this
        vm.loading = true
        axios.get(WebUtil.getUrl(`getcancelbeforepickup|lastId=${lastId}`), {
          headers: WebUtil.globalHeaders,
          responseType: 'json',
          transformResponse: [
            function (data) {
              let list = []
              data.iList.forEach((item, index) => {
                list[index] = {
                  id: item.iDeliveryId,
                  code: item.iOrderCode,
                  applyTime: new Date(item.iCancelTime),
                  user: item.iUserName,
                  reason: item.iCancelReason,
                  amount: item.iFee,
                }
              })
              return {lastId: data.iLastId, count: data.iCount, list: list}
            }
          ]
        }).then(function (res) {
          vm.listData = vm.listData.concat(res.data.list)
          vm.loadMore = res.data.count > vm.listData.length
          vm.lastId |= res.data.lastId
        }).catch(function (err) {
          window.alert(`get refund error: ${err}`)
        }).finally(function(){
          vm.loading = false
        })
      }
    },
    mounted() {
      this.getData(this.lastId)
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
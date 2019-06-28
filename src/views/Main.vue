<template>
  <div class="main">
    <div class="main-title">Dashboard</div>
    <div class="main-second-title">订单<SVGOrder style="width:20px;height:20px;margin-left: 8px;vertical-align: bottom"/></div>
    <div class="main-card-layout">
      <Card class="main-card" :image="SVGRefund" :text="'退款订单'" @click="$router.push({path: '/refund'})"/>
      <Card class="main-card" :image="SVGCancel" :text="'取消订单'" @click="$router.push({path: '/cancel'})"/>
    </div>
    <div class="main-second-title">其它</div>
    <div class="main-card-layout">
      <Card class="main-card" :image="SVGEquip" :text="'装备申请'" @click="$router.push({path: '/equip'})"/>
      <Card class="main-card" :image="SVGVideo" :text="'视频申请'" @click="$router.push({path: '/video'})"/>
    </div>
  </div>
</template>

<script>
  import Card from '@/components/Card.vue'
  import SVGOrder from '@/assets/ic_order.svg'
  import SVGRefund from '@/assets/ic_refund.svg'
  import SVGCancel from '@/assets/ic_cancel.svg'
  import SVGEquip from '@/assets/ic_equip.svg'
  import SVGVideo from '@/assets/ic_video.svg'

  export default {
    name: "Main",
    data() {
      return {
        SVGRefund,
        SVGCancel,
        SVGEquip,
        SVGVideo
      }
    },
    components: {
      Card,
      SVGOrder
    }
  }
</script>

<style scoped lang="scss">
  .main {
    box-sizing: border-box;
    padding: 12px 32px;
  }

  .main-title {
    font-size: 24px;
    text-align: left;
    font-weight: normal;
  }

  .main-second-title {
    font-size: 14px;
    text-align: left;
    font-weight: normal;
    margin-top: 24px;
  }

  .main-card-layout {
    display: flex;
    flex-flow: row;
    margin-top: 12px;
  }

  .main-card {
    margin-right: 10px;
    cursor: pointer;
  }

</style>
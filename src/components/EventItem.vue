<template>
  <div class="event-item event-item--selected" v-if="selected">
    <div class="event-item-dot"></div>
    <div class="event-item--time">3分钟前</div>
    <div class="event-item--title">退款申请</div>
    <div class="event-item--p1">来自：一直低电量的皮卡丘</div>
    <div class="event-item--p2">快递员取件超时，退款金额：24元</div>
  </div>
  <div class="event-item" v-else>
    <div class="event-item-dot"></div>
    <div class="event-item--time">3分钟前</div>
    <div class="event-item--title">退款申请</div>
    <div class="event-item--p1">来自：一直低电量的皮卡丘</div>
    <div class="event-item--p2">快递员取件超时，退款金额：24元</div>
  </div>
</template>

<script>
  export default {
    name: 'EventItem',
    props: {
      title: String,
      selected: Boolean
    }
  }
</script>

<style scoped lang="scss">

  .event-item {
    position: relative;
    height: 128px;
    box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    padding: 18px 16px;
    text-align: left;
    background: transparent;
    border: 2px solid #707070
  }

  .event-item--selected {
    border: none;
    background: #FFEBBF;
  }

  .event-item--time {
    float: right;
    font-size: 12px;
    margin-top: 0;
    color: rgba(black, 0.5);
  }

  .event-item-dot {
    display: inline-block;
    background: #FF434A;
    margin: 0 4px;
    width: 6px;
    height: 6px;
    border-radius: 3px;
  }

  .event-item--title {
    display: inline-block;
    font-weight: 700;
    font-size: 12px;
    text-align: left;
  }

  .event-item--p1 {
    font-weight: normal;
    font-size: 12px;
    text-align: left;
    margin: 8px 0 0 14px;
  }

  .event-item--p2 {
    font-weight: normal;
    font-size: 12px;
    text-align: left;
    margin: 16px 0 0 14px;
    color: rgba(black, 0.5);
  }
</style>
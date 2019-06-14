<template>
  <div class="event-detail">
    <div class="content-layout">
      <div class="content-time">2019年7月1日</div>
      <div class="content-title">退款申请</div>
      <div class="content-from">来自：契诃夫</div>
      <div class="content-line"></div>
    </div>
    <div class="action-layout">
      <div class="action-button" @click="confirm">
        <SVGButton class="action-button--background"/>
        <div class="action-button--text">驳回</div>
      </div>
      <div class="action-button" @click="reject">
        <SVGButton class="action-button--background"/>
        <div class="action-button--text">同意</div>
      </div>
    </div>
  </div>
</template>

<script>

  import SVGButton from '@/assets/button.svg'

  export default {
    name: 'EventDetail',
    components: {
      SVGButton
    },
    methods: {
      confirm: ()=>{
        console.log('confirm')
      },
      reject: ()=>{
        console.log('reject')
      }
    }
  }

</script>

<style scoped lang="scss">

  .event-detail {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .content-layout {
    flex: 1 1 auto;
    border-radius: 4px;
    background: #FFFFFF;
    box-shadow: 0 4px 8px 0 rgba(black, 0.16);
    box-sizing: border-box;
    padding: 36px 48px;
  }

  .content-time {
    float: right;
    top: 0;
    font-size: 12px;
    color: #7f7f7f;
  }

  .content-title {
    font-size: 16px;
    text-align: left;
  }

  .content-from {
    font-size: 12px;
    text-align: left;
    margin-top: 24px;
    color: #7f7f7f;
  }

  .content-line {
    background: #bfbfbf;
    height:1px;
    margin-top: 18px;
  }

  .action-layout {
    flex: 0 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    text-align: right;
    padding: 30px;
    box-sizing: border-box;
  }

  .action-button {
    flex: 0 0 auto;
    position: relative;
    width: 84px;
    height: 36px;
    user-select: none;
  }

  .action-button--background {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    margin: auto;
  }

  .action-button--text {
    position: absolute;
    text-align: center;
    width: 100%;
    height: 100%;
    line-height: 36px;
    font-size: 12px;
    color: #ffffff;
    pointer-events: none;
  }
</style>
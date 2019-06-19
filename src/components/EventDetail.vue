<template>
  <div class="event-detail">
    <div class="content-layout">
      <div class="content-time">{{formatTime(eventData.applyTime)}}</div>
      <div class="content-title">{{title}}</div>
      <div class="content-from">来自：{{eventData.user}}</div>
      <div class="content-line"></div>
      <slot name="content" :order="eventData"></slot>
    </div>
    <div class="action-layout">
      <Button class="action-button" :background="SVGButtonRed">驳回</Button>
      <Button class="action-button" :background="SVGButtonBlue">同意</Button>
    </div>
  </div>
</template>

<script>

  import SVGButtonRed from '@/assets/button_red.svg'
  import SVGButtonBlue from '@/assets/button_blue.svg'
  import Button from '@/components/Button.vue'
  import {formatTime} from "@/util/timeformat";

  export default {
    name: 'EventDetail',
    components: {
      Button
    },
    data() {
      return {
        SVGButtonBlue,
        SVGButtonRed
      }
    },
    props: {
      title: String,
      eventData: Object
    },
    methods: {
      formatTime,
      confirm: () => {
        console.log('confirm')
      },
      reject: () => {
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
    height: 1px;
    margin-top: 18px;
  }

  .action-layout {
    flex: 0 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    text-align: right;
    padding: 12px 32px;
    box-sizing: border-box;
  }

  .action-button {
    flex: 0 0 auto;
    width: 84px;
    height: 36px;
  }
</style>
<template>
  <div class="content-detail">
    <div class="content-layout">
      <div class="content-time">{{formatDate(detailData.applyTime)}}</div>
      <div class="content-title">{{title}} [<span class="content-id">{{detailData.id}}</span>]</div>
      <div class="content-from">来自：{{detailData.user}}</div>
      <div class="content-line"></div>
      <div class="content-main">
        <slot :detailData="detailData"></slot>
      </div>
    </div>
    <div class="action-layout">
      <slot name="action" :detailData="detailData"></slot>
    </div>
  </div>
</template>

<script>

  import TimeUtil from "@/util/timeutil";

  export default {
    name: 'ContentDetail',
    props: {
      title: String,
      detailData: Object
    },
    methods: {
      formatDate: TimeUtil.formatDate
    }
  }

</script>

<style scoped lang="scss">

  .content-detail {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .content-layout {
    flex: 1 1 auto;
    border-radius: 4px;
    background: #FFFFFF;
    box-shadow: 0 1px 40px 0 rgba(black, 0.08);
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
    user-select: none;
  }

  .content-id {
    color: rgba(38, 38, 38, 0.99);
    user-select: text;
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

  .content-main {
    margin-top: 16px;
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
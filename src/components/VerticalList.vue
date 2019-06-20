<template>
  <div class="vertical-list">
    <div v-for="(item, index) in listData"
         :key="index"
         v-bind:class="currentIndex === index ? 'event-item event-item--selected' : 'event-item'"
         @click="itemClick(index)">
      <div class="event-item--dot"></div>
      <div class="event-item--time">
        {{formatDate(item.applyTime)}}
      </div>
      <div class="event-item--title">
        <slot name="title" :data="item">{{index}}</slot>
      </div>
      <div class="event-item--content">
        <slot :data="item"> </slot>
      </div>
      <div class="event-item--user">来自：{{item.user}}</div>
    </div>
  </div>
</template>

<script>
  import TimeFormat from "@/util/time-format";
  export default {
    name: 'VerticalList',
    props: {
      listData: Array,
      type: String
    },
    data: () => {
      return {
        currentIndex: 0
      }
    },
    methods:{
      formatDate: TimeFormat.formatDate,
      itemClick(index){
        this.currentIndex = index
        this.$emit('item-click', index)
      }
    }
  }
</script>

<style scoped lang="scss">

  .vertical-list {
    background: transparent;
    overflow-y: visible;
  }

  /*::-webkit-scrollbar {*/
  /*  width: 10px;*/
  /*}*/

  $color-selected: #2f69ff;

  .event-item {
    position: relative;
    height: auto;
    margin-bottom: 1px;
    padding: 16px 24px 16px 18px;
    box-sizing: border-box;
    text-align: left;
    background: white;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
    color: black;
    cursor: pointer;

    &:hover {
      background-color: #bfd3ff;
    }

  }

  .event-item--selected {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background: $color-selected;
    z-index: 2;
    color: white;

    &:hover {
      background: $color-selected;
    }
  }

  .event-item--time {
    float: right;
    font-size: 12px;
    margin-top: 0;
    opacity: 0.7;
    transform-origin: right;
    transform: scale(0.9);
  }

  .event-item--dot {
    display: inline-block;
    background: #ff4b43;
    margin: 0 4px;
    width: 5px;
    height: 5px;
    border-radius: 3px;
  }

  .event-item--title {
    display: inline-block;
    font-weight: 700;
    font-size: 12px;
    text-align: left;
  }

  .event-item--content {
    font-weight: normal;
    font-size: 12px;
    text-align: left;
    margin: 8px 0 0 14px;
    opacity: 0.7;
    transform: scale(0.9);
    transform-origin: left;
  }

  .event-item--user {
    font-weight: normal;
    font-size: 12px;
    text-align: right;
    margin: 4px 0 0 0;
    transform: scale(0.9);
    transform-origin: right;
  }
</style>
<template>
  <div class="event-list">
    <div v-for="(item, index) in listData"
         :key="index"
         v-bind:class="currentIndex === index ? 'event-item event-item--selected' : 'event-item'"
         @click="currentIndex = index;$emit('item-click', index)">
      <div class="event-item--dot"></div>
      <div class="event-item--time">
        {{`${item.time.getFullYear()}年${item.time.getMonth()}月${item.time.getDay()}${item.time.getHours()}:${item.time.getMinutes()}`}}
      </div>
      <div class="event-item--title">{{item.title}}</div>
      <div class="event-item--content">{{item.content}}</div>
      <div class="event-item--user">来自：{{item.user}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EventList',
    props: {
      listData: Array
    },
    data: () => {
      return {
        currentIndex: 0
      }
    }
  }
</script>

<style scoped lang="scss">

  .event-list {
    background: transparent;
    overflow-y: visible;

  }

  ::-webkit-scrollbar {
    width: 4px;
  }

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
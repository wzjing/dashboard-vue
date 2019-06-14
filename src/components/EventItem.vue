<template>
  <div v-bind:class="selected ? 'event-item event-item--selected' : 'event-item'"
       @click="$emit('item-click', index)">
    <div class="event-item-dot"></div>
    <div class="event-item--time">{{`${data.time.getFullYear()}年${data.time.getMonth()}月${data.time.getDay()}
      ${data.time.getHours()}:${data.time.getMinutes()}`}}
    </div>
    <div class="event-item--title">{{data.title}}</div>
    <div class="event-item--content">{{data.content}}</div>
    <div class="event-item--user">来自：{{data.user}}</div>
  </div>
</template>

<script>
  export default {
    name: 'EventItem',
    props: {
      data: Object,
      index: Number,
      selected: Boolean
    }
  }
</script>

<style scoped lang="scss">

  $color-selected: #fff8d6;

  .event-item {
    position: relative;
    height: auto;
    box-sizing: border-box;
    padding: 16px 24px 16px 18px;
    text-align: left;
    background: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);

    &:hover {
      background: $color-selected;
    }

  }

  .event-item--selected {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background: $color-selected;
    z-index: 2;
  }

  .event-item--time {
    float: right;
    font-size: 12px;
    margin-top: 0;
    color: rgba(black, 0.5);
    transform-origin: right;
    transform: scale(0.9);
  }

  .event-item-dot {
    display: inline-block;
    background: #FF434A;
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
    color: rgba(black, 0.5);
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